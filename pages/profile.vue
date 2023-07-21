<template>
  <NuxtLayout>
    <section class="min-h-screen py-24 sm:py-36">
      <div class="container">
        <ContentDoc path="/profile" v-slot="{ doc }">
          <h1 class="text-left mb-6">{{ doc.header }}</h1>
          <div
            bgImage
            :style="{ backgroundImage: 'url(' + doc.image + ')' }"
            class="w-full h-96 rounded-mjo mb-6"
          />
          <div class="gap-6">
            <ContentRenderer :value="doc" class="text-left" />
          </div>
        </ContentDoc>
      </div>
    </section>
  </NuxtLayout>
</template>
