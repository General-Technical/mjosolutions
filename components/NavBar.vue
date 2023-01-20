<template>
  <ul class="flex gap-6 text-center flex-col md:flex-row">
    <li>
      <NuxtLink to="/" class="nav-item">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/lenders" class="nav-item">Lenders</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/faq" class="nav-item">FAQ</NuxtLink>
    </li>
    <li>
      <a href="/about/#contact" class="nav-item call-button">Contact</a>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
