<template>
  <header class="fixed z-30 w-full pt-6 flex flex-row pr-12">
    <NuxtLink to="/" class="mr-auto md:mr-0 h-8 z-50"><Icon /></NuxtLink>
    <NavBar class="hidden md:flex ml-auto md:ml-4" />
    <div class="flex md:ml-auto">
      <button title="Menu" @click="mobileMenuOpen = true">
        <svg
          class="w-9 h-10 md:hidden text-primary hover:text-hover"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <transition name="menu">
      <MobileMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </transition>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
