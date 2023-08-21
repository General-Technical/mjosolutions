<template>
  <ul class="flex flex-col gap-6 text-center lg:flex-row">
    <li class="ml-0 list-none">
      <NuxtLink to="/" class="nav-item">Home</NuxtLink>
    </li>
    <li class="ml-0 list-none">
      <NuxtLink to="/your-broker" class="nav-item">Your Broker</NuxtLink>
    </li>
    <li class="ml-0 list-none">
      <NuxtLink to="/lenders" class="nav-item">Lenders</NuxtLink>
    </li>
    <li class="ml-0 list-none">
      <NuxtLink to="/faq" class="nav-item">FAQ</NuxtLink>
    </li>
    <li class="ml-0 list-none">
      <a href="/#contact" class="nav-item call-button">Contact</a>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
