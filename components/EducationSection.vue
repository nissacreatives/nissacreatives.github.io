<script setup lang="ts">
const appConfig = useAppConfig();
const edu = appConfig.education_section;

const initials = (title: string) =>
  title
    .replace(/[—–-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('')
    .toUpperCase();
</script>

<template>
  <section id="education" class="relative py-24 sm:py-32 bg-cream-light/40">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="education"
        title="Where I trained"
        :description="edu?.descriptionText"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(item, idx) in edu?.myEducations"
          :key="idx"
          class="editorial-border p-6 sm:p-7 hover:-translate-y-0.5 transition-transform duration-300"
        >
          <div class="flex items-start gap-5">
            <div class="shrink-0 w-16 h-16 rounded-xl placeholder-tile bg-gradient-to-br from-avocado/25 via-cream-dark to-schist/25 border border-domino/10">
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
            <div class="min-w-0">
              <h3 class="font-display text-lg sm:text-xl text-domino">{{ item.title }}</h3>
              <div class="mt-1 text-sm text-ink-dim">{{ item.address }}</div>
              <div class="mt-2 inline-block text-xs px-2.5 py-1 rounded-full bg-rose/15 border border-rose/25 text-rose-dark">
                {{ item.subTitle }}
              </div>
              <div v-if="item.description" class="mt-3 prose-editorial text-sm" v-html="item.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
