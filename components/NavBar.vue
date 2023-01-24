<template>
  <ul class="flex gap-6 text-center flex-col md:flex-row">
    <li class="list-none ml-0">
      <NuxtLink to="/" class="nav-item">Home</NuxtLink>
    </li>
    <li class="list-none ml-0">
      <NuxtLink to="/lenders" class="nav-item">Lenders</NuxtLink>
    </li>
    <li class="list-none ml-0">
      <NuxtLink to="/faq" class="nav-item">FAQ</NuxtLink>
    </li>
    <li class="list-none ml-0">
      <a href="/#contact" class="nav-item call-button">Contact</a>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
