<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/showcase/Header.vue'
import Footer from '@/components/showcase/Footer.vue'

const route = useRoute()
const isStandalonePreview = computed(() => route.path.startsWith('/preview/'))
</script>

<template>
  <div v-if="isStandalonePreview" class="min-h-screen">
    <router-view />
  </div>
  <div v-else class="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
