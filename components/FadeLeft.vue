<template x-data>
  <div
    class="opacity-0 translate-x-1/4 duration-1000"
    x-intersect.threshold.1="$el.classList.add('opacity-100', 'translate-x-0')"
    x-intersect:leave="$el.classList.remove('opacity-100', 'translate-x-0')"
  >
    <slot />
  </div>
</template>
