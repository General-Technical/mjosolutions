<template>
  <nav>
    <ul
      class="flex flex-col items-center justify-center gap-6 text-center md:flex-row"
    >
      <li>
        <NuxtLink to="/" class="nav-item">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="contact" class="nav-item">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-primary font-bold;
}
</style>
