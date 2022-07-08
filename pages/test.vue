<template>
  <section :data="about" v-for="about of about" :key="about.slug">
    <div>
      <h2>{{ about.intro1 }}</h2>
      <h2>{{ about.intro2 }}</h2>
      <MarkdownRenderer>{{ about.why }}</MarkdownRenderer>
    </div>
  </section>
  <section id="what" :data="what" v-for="what of what" :key="what.slug">
    <FadeUp>
      <div class="grid6">
        <a href="#solutions" class="col-span-6"
          ><Arrow class="arrow uparrow" />
        </a>
        <h4 class="col-span-6">{{ what.header }}</h4>
        <div class="col-span-6 columns-2">
          <MarkdownRenderer :value="what" />
        </div>
        <a href="#why" class="col-span-6">
          <Arrow class="arrow" />
        </a>
      </div>
    </FadeUp>
  </section>
</template>

<script setup>
const { data: about } = await useAsyncData("about", () =>
  queryContent("/pages/about").find()
);
const { data: what } = await useAsyncData("what", () =>
  queryContent("/pages/what").find()
);
</script>
