<template>
  <div>
    <section id="intro">
      <FadeUp>
        <div class="grid6">
          <div class="col-span-6 mx-auto">
            <div
              class="col-span-6"
              :data="intro"
              v-for="intro of intro"
              :key="intro.slug"
            >
              <MarkdownRenderer :value="intro" />
            </div>
          </div>
          <a href="#solutions"><Arrow class="arrow" /></a>
        </div>
      </FadeUp>
    </section>
    <section id="solutions">
      <FadeUp>
        <div class="grid8">
          <a href="#intro" class="col-span-8"
            ><Arrow class="arrow uparrow" />
          </a>
          <div class="col-start-3 col-span-4 flex flex-col">
            <Roof class="h-auto ml-auto w-1/3" />
            <div class="bg-primary rounded-b rounded-tl p-4 py-6 pt-10">
              <h4 class="text-background mb-2 text-center">
                MJO Mortgage Solutions provides lending solutions for:
              </h4>
              <div class="text-background font-normal">
                <h5>First Home Buyers</h5>
                <h5>Investors</h5>
                <h5>Refinancers</h5>
                <h5>Full Time, Part time and Casual workers</h5>
                <h5>Self Employed and PAYG Clients</h5>
              </div>
            </div>
          </div>
          <a href="#what" class="col-span-8">
            <Arrow class="arrow" />
          </a>
        </div>
      </FadeUp>
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
    <section id="why">
      <FadeUp>
        <div class="grid8">
          <a href="#what" class="col-span-8"
            ><Arrow class="arrow uparrow" />
          </a>
          <div class="col-start-3 col-span-4 flex flex-col">
            <Roof class="h-auto ml-auto w-1/3" />
            <div class="bg-primary rounded-b rounded-tl p-4 py-6 pt-10">
              <h4 class="text-background mb-2 text-center">Why</h4>
              <div class="text-background font-normal">
                <h5>Using a Mortgage broking is FREE!</h5>
                <h5>
                  We offer loans from a range of lenders, as opposed to banks,
                  which exclusively offer their own products.
                </h5>
                <h5>
                  We save you time, let us do the legwork and find the best loan
                  for you.
                </h5>
              </div>
            </div>
          </div>
          <a href="#where" class="col-span-8">
            <Arrow class="arrow" />
          </a>
        </div>
      </FadeUp>
    </section>
    <section id="where">
      <FadeUp class="grid6">
        <a href="#why" class="col-span-6"><Arrow class="arrow uparrow" /></a>
        <!-- Where -->
        <div
          class="col-span-3"
          :data="where"
          v-for="where of where"
          :key="where.slug"
        >
          <h4>{{ where.header }}</h4>
          <MarkdownRenderer :value="where" />
        </div>
        <!-- Conttact -->
        <div
          class="col-span-3"
          :data="contact"
          v-for="contact of contact"
          :key="contact.slug"
        >
          <h4>{{ contact.header }}</h4>
          <MarkdownRenderer :value="contact" />
          <NuxtLink to="contact" class="p-0"
            ><button class="submitButton mt-4" type="submit">
              contact
            </button></NuxtLink
          >
        </div>
      </FadeUp>
    </section>
  </div>
</template>

<script setup>
const { data: intro } = await useAsyncData("intro", () =>
  queryContent("/pages/about/intro").find()
);
const { data: what } = await useAsyncData("what", () =>
  queryContent("/pages/about/what").find()
);
const { data: where } = await useAsyncData("where", () =>
  queryContent("/pages/about/where").find()
);
const { data: contact } = await useAsyncData("contact", () =>
  queryContent("/pages/about/contact").find()
);
</script>
