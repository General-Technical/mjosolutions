<template>
  <NuxtLayout>
    <!-- Intro -->
    <FadeUp>
      <section id="intro" class="intro h-[calc(100vh-150px)]">
        <div
          class="container grid items-start grid-cols-1 pt-12 sm:grid-cols-2"
        >
          <ContentDoc path="/intro" v-slot="{ doc }" />
          <img
            src="/icons/broker-works-2.svg"
            class="col-start-1 row-start-1 px-12 mb-8 icon lg:px-24 sm:col-start-2 sm:mb-0"
          />
        </div>
      </section>
      <!-- Solutions Cards -->
      <section id="solutions" class="pb-16 sm:pb-24 split">
        <div class="container">
          <div class="card">
            <Solutions class="card" />
          </div>
        </div>
      </section>
    </FadeUp>
    <!-- What -->
    <section class="bg-white sm:pb-24">
      <FadeUp class="container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <ContentDoc path="/what" v-slot="{ doc }">
          <h1 class="mb-auto">{{ doc.header }}</h1>
          <h3>{{ doc.subhead }}</h3>
          <ContentRenderer
            :value="doc"
            class="sm:col-span-2 md:columns-2 sm:gap-8 text-background"
          />
        </ContentDoc>
      </FadeUp>
    </section>
    <!-- Commitment Cards -->
    <ContentDoc path="/contact" v-slot="{ doc }">
      <section
        id="commitment"
        bgImage
        :style="{ backgroundImage: 'url(' + doc.image + ')' }"
        class="z-0 w-screen pt-16 bg-cover"
      >
        <FadeUp
          class="container z-20 grid-cols-1 pb-16 card-grid-mjo sm:grid-cols-3 sm:pb-24"
        >
          <!-- Card -->
          <div class="pt-0 card">
            <ContentDoc path="/comcards/commit" v-slot="{ doc }">
              <img src="/icons/our-commitment.svg" class="icon" />
              <h2>{{ doc.header }}</h2>
              <ContentRenderer :value="doc" />
            </ContentDoc>
          </div>
          <!-- Card -->
          <div class="pt-0 card">
            <ContentDoc path="/comcards/why" v-slot="{ doc }">
              <img src="/icons/broker-free.svg" class="icon" />
              <h2>{{ doc.header }}</h2>
              <ContentRenderer :value="doc" />
            </ContentDoc>
          </div>
          <!-- Card -->
          <div class="pt-0 card">
            <ContentDoc path="/comcards/where" v-slot="{ doc }">
              <img src="/icons/where.svg" class="icon" />
              <h2>{{ doc.header }}</h2>
              <ContentRenderer :value="doc" />
            </ContentDoc>
          </div>
        </FadeUp>
      </section>
      <section>
        <!-- ElfSite -->
        <FadeUp class="container">
          <ElfsightInstagram />
          <ElfsightGoogle />
        </FadeUp>
      </section>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "MJO Mortgage Solutions",
});
</script>
