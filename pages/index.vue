<template>
  <NuxtLayout>
    <!-- Intro -->
    <FadeUp>
      <section id="intro" class="intro h-[calc(100vh-150px)]">
        <div
          class="container items-start pt-12 grid grid-cols-1 sm:grid-cols-2"
        >
          <ContentDoc path="/intro" v-slot="{ doc }" />
          <img
            src="/icons/broker-works-2.svg"
            class="icon px-12 lg:px-24 row-start-1 col-start-1 sm:col-start-2 mb-8 sm:mb-0"
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
    <section class="pb-16 sm:pb-24 bg-white">
      <FadeUp class="container grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
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
    <section id="commitment" class="bg-white">
      <FadeUp
        class="container card-grid-mjo grid-cols-1 sm:grid-cols-3 z-20 pb-16 sm:pb-24"
      >
        <!-- Card -->
        <div class="card pt-0">
          <ContentDoc path="/comcards/commit" v-slot="{ doc }">
            <img src="/icons/our-commitment.svg" class="icon" />
            <h2>{{ doc.header }}</h2>
            <ContentRenderer :value="doc" />
          </ContentDoc>
        </div>
        <!-- Card -->
        <div class="card pt-0">
          <ContentDoc path="/comcards/why" v-slot="{ doc }">
            <img src="/icons/broker-free.svg" class="icon" />
            <h2>{{ doc.header }}</h2>
            <ContentRenderer :value="doc" />
          </ContentDoc>
        </div>
        <!-- Card -->
        <div class="card pt-0">
          <ContentDoc path="/comcards/where" v-slot="{ doc }">
            <img src="/icons/where.svg" class="icon" />
            <h2>{{ doc.header }}</h2>
            <ContentRenderer :value="doc" />
          </ContentDoc>
        </div>
      </FadeUp>
    </section>
    <!-- Contact -->
    <ContentDoc path="/contact" v-slot="{ doc }">
      <section id="contact" class="pb-24 relative bg-background">
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.image + ')' }"
          class="bg-cover h-full w-screen absolute -top-80 z-0 border-primary"
        />
        <div class="container">
          <FadeUp class="card h-fit bg-background bg-opacity-80 pt-10">
            <h1>
              {{ doc.header }}
            </h1>
            <ContentRenderer :value="doc" class="mt-4" />
            <iframe
              src="https://www.cognitoforms.com/f/6Ax0zmUI6UeB6_7JUBHcjA/18"
              style="border: 0; width: 100%"
              class="flex justify-center w-full mx-auto h-196"
            >
            </iframe>
          </FadeUp>
        </div>
      </section>
    </ContentDoc>
  </NuxtLayout>
</template>
