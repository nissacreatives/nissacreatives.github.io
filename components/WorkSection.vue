<script setup lang="ts">
const appConfig = useAppConfig();
const work = appConfig.work_section;

const palettes: Record<string, string> = {
  rose: 'bg-gradient-to-br from-rose/45 via-rose-light/35 to-cream-dark',
  'rose-dark': 'bg-gradient-to-br from-rose-dark/45 via-rose/30 to-cream-dark',
  avocado: 'bg-gradient-to-br from-avocado/40 via-avocado-light/30 to-cream-dark',
  'avocado-dark': 'bg-gradient-to-br from-avocado-dark/40 via-avocado/25 to-cream-dark',
  schist: 'bg-gradient-to-br from-schist/45 via-schist-light/30 to-cream-dark',
  domino: 'bg-gradient-to-br from-domino/25 via-schist/30 to-cream-dark'
};

const tileClass = (p?: string) => palettes[p ?? 'rose'] ?? palettes.rose;
</script>

<template>
  <section id="work" class="relative py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="selected work"
        title="Recent projects"
        :description="work?.descriptionText"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(item, idx) in work?.myWorks"
          :key="idx"
          class="editorial-border overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
        >
          <div
            :class="['aspect-[4/3] placeholder-tile', tileClass(item.palette)]"
          >
            <img
              v-if="item.img"
              :src="item.img"
              :alt="item.title"
              class="relative z-10 w-full h-full object-cover"
            />
            <div v-else class="relative z-10 text-center p-6">
              <div class="font-display italic text-3xl sm:text-4xl text-domino/70">{{ item.title }}</div>
              <div class="mt-3 text-[10px] uppercase tracking-[0.3em] text-domino/55">{{ item.client }}</div>
            </div>
          </div>
          <div class="p-6 sm:p-7">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-display text-xl text-domino">{{ item.title }}</h3>
              <span class="text-xs text-ink-faint uppercase tracking-wider">{{ item.client }}</span>
            </div>
            <p class="text-ink-dim leading-relaxed text-sm sm:text-base">{{ item.description }}</p>
            <div v-if="item.tags?.length" class="flex flex-wrap gap-2 mt-5">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
