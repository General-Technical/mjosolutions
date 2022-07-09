<template>
  <nav>
    <NuxtLink to="/"><Icon class="h-8" /></NuxtLink>
    <NuxtLink to="/" class="ml-6">Home</NuxtLink>
    <NuxtLink to="about" class="ml-4">About</NuxtLink>
    <NuxtLink to="contact" class="ml-4">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
