<template>
  <div>
    <HeaderSection />
    <main>
      <slot />
    </main>
    <FadeUp>
      <div class="fixed !right-0 bottom-0 self-end w-60">
        <House />
      </div>
    </FadeUp>
  </div>
</template>
