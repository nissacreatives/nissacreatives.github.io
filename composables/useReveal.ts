// Scroll-reveal composable using IntersectionObserver.
// Usage: const el = ref(); useReveal(el);
import { onMounted, onBeforeUnmount, type Ref } from 'vue';

export function useReveal(target: Ref<HTMLElement | null>, options: IntersectionObserverInit = {}) {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value || typeof IntersectionObserver === 'undefined') return;
    target.value.classList.add('reveal');
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    );
    observer.observe(target.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });
}
