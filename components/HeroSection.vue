<script setup lang="ts">
const appConfig = useAppConfig();

const featured = [
  { label: 'Brand', classes: 'bg-gradient-to-br from-rose/40 via-rose-light/30 to-cream-dark' },
  { label: 'Web', classes: 'bg-gradient-to-br from-avocado/35 via-schist/25 to-cream-dark' },
  { label: 'Packaging', classes: 'bg-gradient-to-br from-schist/40 via-rose/20 to-cream-dark' }
];
</script>

<template>
  <section id="top" class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <!-- Warm decorative blobs -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-20 -left-20 w-[520px] h-[520px] rounded-full bg-rose/25 blur-3xl animate-blob-float"></div>
      <div class="absolute top-40 right-0 w-[460px] h-[460px] rounded-full bg-avocado/15 blur-3xl animate-blob-float" style="animation-delay:-8s"></div>
      <div class="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-schist/25 blur-3xl animate-blob-float" style="animation-delay:-14s"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
      <!-- Left: text -->
      <div class="animate-fade-in">
        <div class="mono-label mb-5 flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-avocado animate-pulse"></span>
          Open for freelance &amp; contract projects
        </div>
        <p class="text-ink-dim text-base mb-4 italic font-display">Hi, my name is</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-domino">
          Nissa <span class="italic text-rose-dark">Abayan</span>.
        </h1>
        <h2 class="mt-5 text-xl sm:text-2xl text-ink-dim font-light tracking-wide">
          {{ appConfig.positionName }}
        </h2>
        <p class="mt-6 max-w-xl text-ink-dim text-lg leading-relaxed">
          {{ appConfig.fullDescription }}
        </p>
        <p class="mt-3 max-w-xl text-ink/70 text-base">
          {{ appConfig.positionShortDescription }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-if="appConfig.email" :href="'mailto:' + appConfig.email" class="btn-primary">
            Start a project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#work" class="btn-ghost">
            View selected work
          </a>
          <a v-if="appConfig.phone" :href="'tel:' + appConfig.phone" class="btn-ghost">
            Call / SMS
          </a>
        </div>
      </div>

      <!-- Right: portrait placeholder + featured-work trio -->
      <div class="relative animate-fade-in" style="animation-delay: 0.15s">
        <div class="relative mx-auto w-fit">
          <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose/40 via-schist/25 to-avocado/30 blur-xl"></div>
          <div class="relative rounded-3xl w-56 h-72 sm:w-64 sm:h-80 placeholder-tile bg-gradient-to-br from-rose/30 via-cream-dark to-schist/30 border border-domino/10 shadow-xl">
            <div class="text-center p-6 relative z-10">
              <div class="font-display text-6xl text-domino/70">NA</div>
              <div class="mt-3 text-[10px] uppercase tracking-[0.3em] text-domino/50">Portrait placeholder</div>
            </div>
          </div>
        </div>

        <!-- Featured work strip -->
        <div class="mt-10 grid grid-cols-3 gap-3">
          <div
            v-for="tile in featured"
            :key="tile.label"
            :class="['aspect-[3/4] rounded-xl placeholder-tile border border-domino/10 shadow-sm', tile.classes]"
          >
            <span class="relative z-10 font-display italic text-sm text-domino/70">{{ tile.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
