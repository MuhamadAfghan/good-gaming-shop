<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  thumbWidth: {
    type: Number,
    default: 15,
  },
  scrollbarClass: {
    type: String,
    default:
      "mt-10 relative h-1.5 w-full bg-white/10 rounded-full cursor-pointer touch-none",
  },
  thumbClass: {
    type: String,
    default: "h-full bg-white rounded-full absolute top-0 will-change-[left]",
  },
});

const scrollContainer = ref<HTMLElement | null>(null);
const scrollbarTrack = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);

let isDragging = false;
let startX = 0;
let scrollLeftStart = 0;

const updateThumb = () => {
  if (!scrollContainer.value) return;
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
  const maxScroll = scrollWidth - clientWidth;
  const percentage = maxScroll <= 0 ? 0 : scrollLeft / maxScroll;
  scrollProgress.value = percentage * (100 - props.thumbWidth);
};

const initCardDrag = (e: MouseEvent) => {
  if (!scrollContainer.value) return;

  isDragging = true;
  scrollContainer.value.classList.add("is-dragging");

  scrollContainer.value.style.scrollSnapType = "none";
  scrollContainer.value.style.scrollBehavior = "auto";

  startX = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeftStart = scrollContainer.value.scrollLeft;

  window.addEventListener("mousemove", handleCardMove);
  window.addEventListener("mouseup", stopCardDrag);
};

const handleCardMove = (e: MouseEvent) => {
  if (!isDragging || !scrollContainer.value) return;
  e.preventDefault();

  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = (x - startX) * 1.5; // Drag sensitivity
  scrollContainer.value.scrollLeft = scrollLeftStart - walk;
  updateThumb();
};

const stopCardDrag = () => {
  isDragging = false;
  if (!scrollContainer.value) return;

  scrollContainer.value.classList.remove("is-dragging");
  scrollContainer.value.style.scrollSnapType = "x mandatory";
  scrollContainer.value.style.scrollBehavior = "smooth";

  window.removeEventListener("mousemove", handleCardMove);
  window.removeEventListener("mouseup", stopCardDrag);
};

const handleScrollbarPointer = (e: PointerEvent) => {
  if (!scrollbarTrack.value || !scrollContainer.value) return;

  const track = scrollbarTrack.value;
  const container = scrollContainer.value;

  container.style.scrollSnapType = "none";
  container.style.scrollBehavior = "auto";

  const moveScrollbar = (event: PointerEvent) => {
    const { left, width } = track.getBoundingClientRect();
    const maxScroll = container.scrollWidth - container.clientWidth;

    let ratio = (event.clientX - left) / width;
    ratio = Math.max(0, Math.min(1, ratio));

    container.scrollLeft = ratio * maxScroll;
    updateThumb();
  };

  const stopScrollbarDrag = () => {
    container.style.scrollSnapType = "x mandatory";
    container.style.scrollBehavior = "smooth";
    window.removeEventListener("pointermove", moveScrollbar);
    window.removeEventListener("pointerup", stopScrollbarDrag);
  };

  moveScrollbar(e);
  window.addEventListener("pointermove", moveScrollbar);
  window.addEventListener("pointerup", stopScrollbarDrag);
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", updateThumb, {
      passive: true,
    });
    updateThumb();
  }
});

onBeforeUnmount(() => {
  scrollContainer.value?.removeEventListener("scroll", updateThumb);
});
</script>

<template>
  <div class="carousel-wrapper">
    <!-- Scroll Container -->
    <div
      ref="scrollContainer"
      class="flex overflow-x-auto gap-5 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      @mousedown="initCardDrag"
    >
      <slot />
    </div>

    <!-- Scrollbar Indicator -->
    <div
      ref="scrollbarTrack"
      :class="scrollbarClass"
      @pointerdown="handleScrollbarPointer"
    >
      <div
        class="h-full rounded-full absolute top-0 will-change-[left]"
        :style="{
          width: `${thumbWidth}%`,
          left: `${scrollProgress}%`,
        }"
        :class="thumbClass"
      />
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Important: Disable snap while dragging */
.is-dragging {
  scroll-snap-type: none !important;
  scroll-behavior: auto !important;
}
</style>
