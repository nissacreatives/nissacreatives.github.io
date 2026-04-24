<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  description?: string | null;
}>();
</script>

<template>
  <div class="mb-14 max-w-3xl">
    <div class="mono-label mb-4">{{ label }}</div>
    <h2 class="font-display text-4xl sm:text-5xl text-domino leading-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-5 text-ink-dim text-lg leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
