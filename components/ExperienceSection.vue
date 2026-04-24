<script setup lang="ts">
const appConfig = useAppConfig();
const exp = appConfig.experience_section;

const initials = (title: string) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
</script>

<template>
  <section id="experience" class="relative py-24 sm:py-32 bg-cream-light/40">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="experience"
        title="Where I've designed"
        :description="exp?.descriptionText"
      />

      <div class="relative">
        <div aria-hidden="true" class="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-rose-dark/50 via-avocado/40 to-transparent"></div>

        <ol class="space-y-8">
          <li
            v-for="(item, idx) in exp?.myExperiences"
            :key="idx"
            class="relative pl-14 sm:pl-20"
          >
            <span
              aria-hidden="true"
              class="absolute left-[9px] sm:left-[17px] top-8 w-4 h-4 rounded-full bg-cream border-2 border-rose-dark shadow-[0_0_0_4px_rgba(164,119,134,0.15)]"
            ></span>

            <div class="editorial-border p-6 sm:p-8 hover:-translate-y-0.5 transition-transform duration-300">
              <div class="flex flex-col sm:flex-row sm:items-start gap-5">
                <div class="shrink-0 w-16 h-16 rounded-xl placeholder-tile bg-gradient-to-br from-rose/25 via-cream-dark to-schist/25 border border-domino/10">
                  <img
                    v-if="item.img"
                    :src="item.img"
                    :alt="item.title"
                    class="relative z-10 max-w-full max-h-full object-contain p-1"
                  />
                  <span
                    v-else
                    class="relative z-10 font-display text-lg text-domino/70"
                  >
                    {{ initials(item.title) }}
                  </span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-display text-xl sm:text-2xl text-domino">{{ item.title }}</h3>
                  <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span class="text-ink-dim">{{ item.address }}</span>
                    <span class="text-xs px-2.5 py-0.5 rounded-full bg-avocado/15 border border-avocado/25 text-avocado-dark">
                      {{ item.subTitle }}
                    </span>
                  </div>
                  <div class="mt-4 prose-editorial text-sm sm:text-base" v-html="item.description"></div>
                  <a
                    v-if="item.actionButton?.url"
                    :href="item.actionButton.url"
                    target="_blank"
                    rel="noopener"
                    class="mt-5 inline-flex items-center gap-1.5 text-sm text-rose-dark hover:text-domino transition-colors"
                  >
                    {{ (item.actionButton as any).text ?? 'View Company' }}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
