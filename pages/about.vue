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

<template>
  <div>
    <section id="intro" :data="intro" v-for="intro of intro" :key="intro.slug">
      <div class="flex flex-col mt-auto">
        <FadeDown class="page-logo">
          <LogoStacked />
        </FadeDown>
        <FadeUp class="sm:w-4/5 mx-auto">
          <h1>{{ intro.intro1 }}</h1>
        </FadeUp>
      </div>
      <FadeUp class="w-full mt-auto">
        <a href="#solutions" class="w-full">
          <h5 class="w-24 text-left animate-pulse-slow">
            {{ intro.intro2 }}
          </h5>
          <Arrow class="arrow mt-4"
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
      <FadeDown class="sm:w-4/5 mx-auto">
        <h4 class="text-center">{{ solutions.header }}:</h4>
      </FadeDown>
      <FadeUp class="sm:w-4/5 mx-auto mt-4">
        <h2>{{ solutions.sol1 }}</h2>
        <h2>{{ solutions.sol2 }}</h2>
        <h2>{{ solutions.sol3 }}</h2>
        <h2>{{ solutions.sol4 }}</h2>
        <h2>{{ solutions.sol5 }}</h2>
      </FadeUp>
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
      <FadeDown class="mt-auto w-full sm:w-4/5">
        <h4>{{ what.header }}</h4>
      </FadeDown>
      <FadeUp class="mb-auto sm:w-4/5">
        <MarkdownRenderer :value="what" class="md:col2 gap-10" />
      </FadeUp>
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
      <FadeDown class="sm:w-4/5 mx-auto">
        <h4 class="text-center">{{ why.header }}</h4>
      </FadeDown>
      <FadeUp class="sm:w-4/5 mx-auto mt-4">
        <h2>{{ why.why1 }}</h2>
        <h2>{{ why.why2 }}</h2>
        <h2>{{ why.why3 }}</h2>
        <h2>{{ why.why4 }}</h2>
        <h2>{{ why.why5 }}</h2>
      </FadeUp>
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
      <div class="grid md:grid-cols-2 gap-4 md:gap-10 sm:w-4/5 mx-auto mb-auto">
        <!-- Where -->
        <div :data="where" v-for="where of where" :key="where.slug">
          <FadeDown>
            <h4>{{ where.header }}</h4>
          </FadeDown>
          <FadeUp>
            <h3>
              {{ where.subheader }}
            </h3>
            <MarkdownRenderer :value="where" />
          </FadeUp>
        </div>
        <!-- Conttact -->
        <div :data="contact" v-for="contact of contact" :key="contact.slug">
          <FadeDown>
            <h4>{{ contact.header }}</h4>
          </FadeDown>
          <FadeUp>
            <MarkdownRenderer :value="contact" />
            <NuxtLink to="contact" class="p-0"
              ><button class="submitButton mt-4" type="submit">contact</button>
            </NuxtLink>
          </FadeUp>
        </div>
      </div>
    </section>
  </div>
</template>
