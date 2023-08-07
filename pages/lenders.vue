<template>
  <NuxtLayout>
    <section id="faq" class="py-24 min-h-screen sm:py-36">
      <FadeUp class="container">
        <h2 class="mb-8 text-center text-primary">
          Why talk to over 40 different lenders when the team at MJO Mortgage
          Solutions can do it for you.
        </h2>
        <div
          class="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6 sm:gap-3"
        >
          <div
            :data="lenders"
            v-for="lender of lenders"
            :key="lender.slug"
            class="flex justify-center p-4 h-full bg-white border rounded-mjo border-primary"
          >
            <img :src="lender.image" class="m-auto w-full h-auto" />
          </div>
        </div>
      </FadeUp>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { data: lenders } = await useAsyncData("lenders", () =>
  queryContent("/lenders").sort({ date: -1 }).find()
);
useHead({
  title: "MJO - Lenders",
});
</script>
