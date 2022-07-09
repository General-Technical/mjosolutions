<template>
  <div>
    <section id="intro" :data="intro" v-for="intro of intro" :key="intro.slug">
      <div class="flex flex-col mt-auto">
        <FadeDown class="logo">
          <LogoStacked />
        </FadeDown>
        <FadeUp class="w-4/5 mx-auto">
          <h1>{{ intro.intro1 }}</h1>
        </FadeUp>
      </div>
      <FadeUp class="w-full mt-auto">
        <a href="#solutions" class="w-full">
          <h2 class="w-24 text-secondary animate-pulse-slow">
            {{ intro.intro2 }}
          </h2>
          <Arrow class="arrow"
        /></a>
      </FadeUp>
    </section>
    <section
      id="solutions"
      :data="solutions"
      v-for="solutions of solutions"
      :key="solutions.slug"
    >
      <FadeDown class="w-full mb-auto">
        <a href="#intro" class="w-full">
          <Arrow class="arrow uparrow" />
        </a>
      </FadeDown>
      <FadeDown class="content">
        <div class="card w-2/4 items-center justify-center">
          <Roof class="ml-auto w-1/4" />
          <div class="card-content md:flex-row">
            <h4 class="text-background mb-2 md:text-right md:w-1/3">
              {{ solutions.header }}
            </h4>
            <div class="text-background my-auto md:ml-4">
              <h5>{{ solutions.sol1 }}</h5>
              <h5>{{ solutions.sol2 }}</h5>
              <h5>{{ solutions.sol3 }}</h5>
              <h5>{{ solutions.sol4 }}</h5>
              <h5>{{ solutions.sol5 }}</h5>
            </div>
          </div>
        </div>
      </FadeDown>
      <FadeUp class="w-full mt-auto">
        <a href="#what" class="w-full">
          <Arrow class="arrow" />
        </a>
      </FadeUp>
    </section>
    <section id="what" :data="what" v-for="what of what" :key="what.slug">
      <FadeDown class="w-full mb-auto">
        <a href="#solutions" class="w-full">
          <Arrow class="arrow uparrow" />
        </a>
      </FadeDown>
      <FadeDown class="content">
        <h4>{{ what.header }}</h4>
        <MarkdownRenderer :value="what" class="col2" />
      </FadeDown>
      <FadeUp class="w-full mt-auto">
        <a href="#why" class="w-full">
          <Arrow class="arrow" />
        </a>
      </FadeUp>
    </section>
    <section id="why" :data="why" v-for="why of why" :key="why.slug">
      <FadeDown class="w-full mb-auto">
        <a href="#what" class="w-full"><Arrow class="arrow uparrow" /> </a>
      </FadeDown>
      <FadeDown class="content">
        <div class="card w-2/4">
          <Roof class="ml-auto w-1/4" />
          <div class="card-content">
            <h4 class="text-background mb-2">
              {{ why.header }}
            </h4>
            <div class="text-background font-normal">
              <h5>{{ why.why1 }}</h5>
              <h5>{{ why.why2 }}</h5>
              <h5>{{ why.why3 }}</h5>
              <h5>{{ why.why4 }}</h5>
              <h5>{{ why.why5 }}</h5>
            </div>
          </div>
        </div>
      </FadeDown>
      <FadeUp class="w-full mt-auto">
        <a href="#where" class="w-full">
          <Arrow class="arrow" />
        </a>
      </FadeUp>
    </section>
    <section id="where">
      <FadeDown class="w-full mb-auto">
        <a href="#why" class="w-full">
          <Arrow class="arrow uparrow" />
        </a>
      </FadeDown>
      <FadeDown class="content mb-auto">
        <div class="flex flex-col md:flex-row">
          <!-- Where -->
          <div
            class="md:w-1/2 md:pr-4"
            :data="where"
            v-for="where of where"
            :key="where.slug"
          >
            <h4>{{ where.header }}</h4>
            <h3>
              {{ where.subheader }}
            </h3>
            <MarkdownRenderer :value="where" />
          </div>
          <!-- Conttact -->
          <div
            class="md:w-1/2 md:pl-4 mt-6 md:mt-0"
            :data="contact"
            v-for="contact of contact"
            :key="contact.slug"
          >
            <h4>{{ contact.header }}</h4>
            <MarkdownRenderer :value="contact" />
            <NuxtLink to="contact" class="p-0"
              ><button class="submitButton mt-4" type="submit">contact</button>
            </NuxtLink>
          </div>
        </div>
      </FadeDown>
      <FadeUp class="w-full mt-auto"> </FadeUp>
    </section>
  </div>
</template>

<script setup>
const { data: intro } = await useAsyncData("intro", () =>
  queryContent("/pages/about/intro").find()
);
const { data: solutions } = await useAsyncData("solutions", () =>
  queryContent("/pages/about/solutions").find()
);
const { data: what } = await useAsyncData("what", () =>
  queryContent("/pages/about/what").find()
);
const { data: why } = await useAsyncData("why", () =>
  queryContent("/pages/about/why").find()
);
const { data: where } = await useAsyncData("where", () =>
  queryContent("/pages/about/where").find()
);
const { data: contact } = await useAsyncData("contact", () =>
  queryContent("/pages/about/contact").find()
);
</script>
