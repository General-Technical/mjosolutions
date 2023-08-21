<template>
  <header>
    <div class="container">
      <nav>
        <NuxtLink to="/">
          <!-- <LogoStacked /> -->
          <img
            src="/images/mjo-logo.png"
            alt="MJO Mortgage Solutions"
            class="w-auto h-10 pb-3 sm:h-12"
          />
        </NuxtLink>
        <NavBar class="justify-end flex-1 hidden lg:flex" />
        <div class="flex justify-end flex-1 lg:hidden">
          <button title="Menu" @click="mobileMenuOpen = true">
            <svg
              class="h-10 w-9 text-primary hover:text-hover"
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
      </nav>
    </div>
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
