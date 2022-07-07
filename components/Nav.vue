<template>
  <nav>
    <NuxtLink to="/"><Icon class="h-8" /></NuxtLink>
    <NuxtLink to="/" class="ml-2">Home</NuxtLink>
    <NuxtLink to="contact">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
