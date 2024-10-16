<template>
    <div dir="rtl" class="carousel-container relative w-full h-full mx-auto">
        <!-- Slides -->
        <div
            class="carousel-slides flex transition-transform duration-500 ease-in-out h-full"
            :style="{ transform: `translateX(${currentIndex * 100}%)` }"
        >
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="w-full flex-shrink-0 h-full relative overflow-hidden"
            >
                <img
                    draggable="false"
                    :src="slide.image"
                    :alt="slide.title"
                    class="w-full h-full object-cover motion"
                />
                <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 text-xl md:text-3xl lg:text-5xl text-center max-w-xl leading-10"
                >
                    {{ slide.title }}</span
                >
            </div>
        </div>
        <!-- Next Button -->
        <button
            @click="nextSlide"
            class="absolute top-1/2 transform -translate-y-1/2 left-2 bg-black/50 text-white px-3 py-2"
        >
            <Icon :icon="['fas', 'angle-left']" />
        </button>
        <!-- Previous Button -->
        <button
            @click="prevSlide"
            class="absolute top-1/2 transform -translate-y-1/2 right-2 bg-black/50 text-white px-3 py-2"
        >
            <Icon :icon="['fas', 'angle-right']" />
        </button>

        <!-- Indicators -->
        <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            <span
                v-for="(slide, index) in slides"
                :key="index"
                @click="setCurrentSlide(index)"
                class="cursor-pointer h-3 w-3 rounded-full"
                :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slides: Array,
        default: [],
    },
    data() {
        return {
            currentIndex: 0,
            time: 7000,
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex =
                this.currentIndex > 0
                    ? this.currentIndex - 1
                    : this.slides.length - 1;
        },
        nextSlide() {
            this.currentIndex =
                this.currentIndex < this.slides.length - 1
                    ? this.currentIndex + 1
                    : 0;
        },
        setCurrentSlide(index) {
            this.currentIndex = index;
        },
    },
    mounted() {
        setInterval(() => this.nextSlide(), this.time);
    },
};
</script>

<style scoped>
.carousel-container {
    overflow: hidden;
}

.carousel-slides {
    display: flex;
}
.motion {
    animation: motion 15s linear infinite forwards alternate;
}
@keyframes motion {
    from {
        scale: 1;
    }
    to {
        scale: 1.25;
    }
}
</style>
