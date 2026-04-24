<script setup lang="ts">
const appConfig = useAppConfig();
const contact = appConfig.contact_section;
const year = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="relative border-t border-domino/10 mt-20">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <div class="max-w-2xl">
        <div class="mono-label mb-3">contact</div>
        <h2 class="font-display text-4xl sm:text-5xl tracking-tight text-domino">
          Let's <span class="italic text-rose-dark">make</span> something.
        </h2>
        <p class="mt-4 text-ink-dim text-lg">
          {{ contact?.descriptionText || "Have a brief, a brand, or a launch coming up? I'd love to hear about it." }}
        </p>
        <a
          v-if="appConfig.email"
          :href="'mailto:' + appConfig.email"
          class="btn-primary mt-8"
        >
          Say hello
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        <div v-if="contact?.address">
          <div class="mono-label mb-2">address</div>
          <div class="text-domino font-medium">{{ contact.address.name }}</div>
          <div class="text-ink-dim">{{ contact.address.street }}</div>
          <div class="text-ink-dim">{{ contact.address.provinceAndZip }}</div>
        </div>
        <div v-if="appConfig.email">
          <div class="mono-label mb-2">email</div>
          <a :href="'mailto:' + appConfig.email" class="text-domino hover:text-rose-dark break-words">{{ appConfig.email }}</a>
        </div>
        <div v-if="appConfig.phone">
          <div class="mono-label mb-2">phone</div>
          <a :href="'tel:' + appConfig.phone" class="text-domino hover:text-rose-dark">{{ appConfig.phone }}</a>
        </div>
      </div>

      <div class="mt-16 pt-6 border-t border-domino/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
        <div>© {{ year }} Nissa Abayan. All rights reserved.</div>
        <div class="italic font-display">Designed with care.</div>
      </div>
    </div>
  </footer>
</template>
