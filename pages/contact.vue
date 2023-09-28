<template>
  <NuxtLayout>
    <ContentDoc path="/contact" v-slot="{ doc }">
      <section id="contact" class="relative min-h-screen bg-background">
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.image + ')' }"
          class="absolute z-0 w-screen h-full bg-cover border-primary"
        />
        <div class="container">
          <FadeUp class="pt-10 bg-opacity-80 card h-fit bg-background">
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
