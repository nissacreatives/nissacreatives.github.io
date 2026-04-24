<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#contact', label: 'Contact' }
];
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-cream-light/85 backdrop-blur-lg border-b border-domino/10' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="font-display text-xl text-domino tracking-tight">
        Nissa <span class="italic text-rose-dark">Abayan</span>
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm text-ink-dim">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="hover:text-domino transition-colors">
            {{ l.label }}
          </a>
        </li>
      </ul>
      <button
        class="md:hidden text-domino p-2 -mr-2"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line v-if="!open" x1="3" y1="7" x2="21" y2="7" />
          <line v-if="!open" x1="3" y1="17" x2="21" y2="17" />
          <line v-if="open" x1="5" y1="5" x2="19" y2="19" />
          <line v-if="open" x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
    </nav>
    <div v-if="open" class="md:hidden border-t border-domino/10 bg-cream-light/95 backdrop-blur-lg">
      <ul class="px-6 py-4 space-y-3">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="block text-ink-dim hover:text-domino" @click="open = false">
            {{ l.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
