<script setup lang="ts">
const appConfig = useAppConfig();
const skills = appConfig.skills_section;
</script>

<template>
  <section id="capabilities" class="relative py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="capabilities"
        title="What I design"
        :description="skills?.descriptionText"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(skill, idx) in skills?.mySkills"
          :key="idx"
          class="editorial-border p-6 hover:-translate-y-1 transition-transform duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0 w-14 h-14 rounded-xl placeholder-tile bg-gradient-to-br from-rose/25 via-cream-dark to-avocado/25 border border-domino/10">
              <img
                v-if="skill.img"
                :src="skill.img"
                :alt="skill.title"
                class="relative z-10 max-w-full max-h-full object-contain p-2"
              />
              <span
                v-else
                class="relative z-10 font-display text-xl text-domino/75"
              >
                {{ skill.title?.charAt(0) }}
              </span>
            </div>
            <div class="min-w-0">
              <h3 class="font-display text-lg text-domino">{{ skill.title }}</h3>
              <p class="mt-1.5 text-sm text-ink-dim leading-relaxed">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 editorial-border p-6 sm:p-8">
        <div class="mono-label mb-3">tools &amp; software</div>
        <p class="font-display text-lg sm:text-xl text-domino leading-relaxed">
          Adobe Photoshop · Adobe Illustrator · Adobe InDesign · Adobe After Effects · Canva · 3D Software
        </p>
      </div>
    </div>
  </section>
</template>
