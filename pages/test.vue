<template>
  <section :data="about" v-for="about of about" :key="about.slug">
    <div>
      <p>{{ about.intro }}</p>
      <MarkdownRenderer :value="about" />
    </div>
  </section>
</template>

<script setup>
const { data: about } = await useAsyncData("about", () =>
  queryContent("/pages/aboutmd").find()
);
</script>
