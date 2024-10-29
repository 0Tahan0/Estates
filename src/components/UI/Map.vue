<template>
  <div class="relative w-full h-full">
    <Loading v-if="loading" />
    <div v-if="control" class="absolute bottom-5 left-2.5 z-30 grid gap-1">
      <IconBtn
        :toolTip="$t('ui.PointingMode')"
        icon="fa-solid fa-location-dot"
        class="rounded-sm min-w-8 bg-light text-dark shadow-md"
        @click="pointingMode = !pointingMode"
        :class="{ 'ring ring-mainColor text-mainColor': pointingMode }"
      />
      <IconBtn
        :toolTip="$t('ui.DeleteMode')"
        icon="fa-solid fa-trash"
        class="rounded-sm min-w-8 bg-light text-dark shadow-md"
        @click="deleteMode = !deleteMode"
        :class="{ 'ring ring-mainColor text-mainColor': deleteMode }"
      />
    </div>

    <div
      class="absolute w-full h-full overflow-hidden _MapContainer_"
      :class="pointingMode && '*:*:cursor-crosshair '"
      ref="mapContainer"
    ></div>
  </div>
</template>

<script>
import { Map, MapStyle, config, Marker } from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
export default {
  name: "MapComponent",
  emits: ["add", "delete", "click"],
  props: {
    location: {
      type: Array,
      default: [50, 50],
    },
    zoom: {
      type: Number,
      default: 1,
    },
    points: {
      type: Array,
      default: [],
    },
    control: {
      type: Boolean,
      default: false,
    },
    multiPoints: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      map: null,
      loading: false,
      pointingMode: false,
      deleteMode: false,
      apiKey: "I5NjhOCpMfCd6OpgxXPa",
      tempPointInfo: null,
      EnaledMultiPoints: this.$props.multiPoints,
    };
  },
  methods: {
    async getLocation(placeName) {
      const apiKey = this.apiKey; // Replace with your MapTiler API key
      const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
        placeName
      )}.json?key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.results && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        return {
          latitude: location.lat,
          longitude: location.lng,
        };
      } else {
        throw new Error("Location not found");
      }
    },
    async getLocationName({ lon, lat }) {
      const url = `https://api.maptiler.com/geocoding/${lon},${lat}.json?key=${this.apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Extract the location name
        const locationName = {
          place_name_ar: data.features[0].place_name_ar,
          place_name_en: data.features[0].place_name_en,
        };
        return locationName;
      } catch (error) {
        console.error("Error fetching location name:", error);
      }
    },
    handelPointClick(e, point, callback) {
      if (this.deleteMode) {
        callback();
        this.EnaledMultiPoints = true;
        this.$emit("delete", null);
      } else {
        this.$emit("click", point);
      }
    },

    async handelPointSet(e, point) {
      if (this.pointingMode) {
        if (!this.EnaledMultiPoints && this.tempPointInfo) return;
        this.EnaledMultiPoints = this.multiPoints
        const location = e.lngLat;
        await this.createPoint({ location: [location.lng, location.lat] });
        this.$emit("add", this.tempPointInfo);
        // this.tempPointInfo = null;
      }
    },
    async createPoint(point) {
      this.loading = true;
      const marker = new Marker({ color: "var(--dark)" });
      const [lon, lat] = point.location;
      const locationName = await this.getLocationName({ lon, lat });
      this.loading = false;
      marker._element.className += ` cursor-pointer  z-20`;
      marker._element.setAttribute("tooltip", locationName.place_name_en);

      this.tempPointInfo = {
        point: point,
        locationName: locationName,
        id: point.id || new Date().getTime(),
      };
      marker._element.addEventListener("click", (e) =>this.handelPointClick(e, point, () => marker.remove())); /*prettier-ignore*/
      marker.setLngLat(point.location);
      marker.addTo(this.map);
    },
  },
  async mounted() {
    config.apiKey = this.apiKey;
    this.map = new Map({
      container: this.$refs.mapContainer,
      style: MapStyle.STREETS,
      center: this.location,
      zoom: this.zoom,
    });
    if (this.control) {
      this.map.on("click", (e) => this.handelPointSet(e));
    }
    this.points?.forEach((point) => this.createPoint(point));
    // this.createPoint(this.location);
    // console.log( await this.getLocation('istanbul'))
  },
  beforeDestroy() {
    const mapPoints = docuemnt.querySelectorAll("[pointer_estate]");
    mapPoints?.forEach((mp) => {
      mp.removeEventListener("click");
      if (this.control) mp.removeEventListener("click");
    });
    if (this.map) {
      this.map.remove();
    }
  },
  watch: {
    pointingMode(val) {
      if (val) this.deleteMode = false;
    },
    deleteMode(val) {
      if (val) this.pointingMode = false;
    },
  },
};
</script>
<style>
._MapContainer_ > a,
._MapContainer_ * > a {
  display: none !important;
}
</style>
