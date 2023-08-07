<template>
  <NuxtLayout>
    <section class="py-24 min-h-[calc(100vh-150px)] sm:py-36">
      <FadeUp class="container">
        <ContentDoc path="/profile" v-slot="{ doc }">
          <h1 class="mb-4 text-left md:mb-12">{{ doc.header }}</h1>
          <div class="flex">
            <div
              class="flex flex-col gap-6 p-4 border md:flex-row border-primary rounded-mjo"
            >
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="z-50 w-full h-96 bg-center bg-cover border md:h-full md:w-1/3 rounded-mjo border-primary"
              />
              <ContentRenderer
                :value="doc"
                class="gap-4 w-full text-left md:w-2/3 lg:columns-2"
              />
            </div>
          </div>
        </ContentDoc>
      </FadeUp>
    </section>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "MJO - Your Broker",
});
</script>
