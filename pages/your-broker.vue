<template>
  <NuxtLayout>
    <ContentDoc path="/profile" v-slot="{ doc }">
      <section
        class="py-24 min-h-screen sm:py-36 bg-top bg-cover mb-12 !pt-20"
        :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
      >
        <FadeUp class="container">
          <div class="flex flex-col w-full">
            <h1
              class="pb-4 text-center md:pb-3 text-primary card bg-background/80"
            >
              {{ doc.header }}
            </h1>
            <div class="flex flex-col gap-6 md:flex-row card bg-background/80">
              <ContentRenderer
                :value="doc"
                class="w-full gap-5 text-left md:w-1/2 lg:w-2/3 lg:columns-2"
              />
              <div
                bgImage
                :style="{ backgroundImage: 'url(' + doc.image + ')' }"
                class="z-50 flex w-full bg-no-repeat bg-contain h-[340px] md:h-[500px] lg:h-[340px] md:w-1/2 lg:w-1/3 rounded-mjo mt-auto bg-bottom md:mb-4 lg:mb-2"
              />
            </div>
          </div>
        </FadeUp>
      </section>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "MJO - Your Broker",
});
</script>
