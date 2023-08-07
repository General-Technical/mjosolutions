<template>
  <NuxtLayout>
    <section class="py-24 min-h-screen sm:py-36">
      <div class="container">
        <ContentDoc path="/privacy" v-slot="{ doc }">
          <h1 class="mb-6 text-left">{{ doc.header }}</h1>
          <div class="gap-6">
            <ContentRenderer :value="doc" class="text-left" />
          </div>
        </ContentDoc>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "MJO - Privacy",
});
</script>
