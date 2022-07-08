<template>
  <nav>
    <NuxtLink to="/"><Icon class="h-8" /></NuxtLink>
    <NuxtLink to="/" class="ml-2">Home</NuxtLink>
    <NuxtLink to="about">About</NuxtLink>
    <NuxtLink to="contact">Contact</NuxtLink>
    <NuxtLink to="test">Test</NuxtLink>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
