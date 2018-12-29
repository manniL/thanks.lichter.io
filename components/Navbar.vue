<template>
  <nav class="flex items-center justify-between flex-wrap p-4">
    <VueNextLevelScroll>
      <NuxtLink
        class="flex items-center flex-no-shrink text-black mr-6 no-underline cursor-pointer"
        to="/"
        @click.prevent="toggleVisibility"
      >
        <LightbulbIcon class="fill-current w-8 h-8 mr-1" />
        <p class="font-semibold text-xl tracking-tight">
          thanks.Lichter.io
        </p>
      </NuxtLink>
    </VueNextLevelScroll>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded border-grey-darkest hover:text-grey-dark hover:border-grey-dark"
        @click="toggleVisibility"
      >
        <MenuIcon class="fill-current h-3 w-3" />
      </button>
    </div>
    <div
      :class="{'hidden': !isVisible}"
      class="w-full lg:block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:w-auto"
    >
      <div>
        <a
          rel="noopener"
          class="block mt-4 lg:inline-block lg:mt-0 text-grey-darkest hover:text-black mr-4 lg:mr-6 no-underline cursor-pointer"
          href="https://lichter.io?ref=thanks.lichter.io"
          target="_blank"
        >
          About me
        </a>
        <a
          rel="noopener"
          class="block mt-4 lg:inline-block lg:mt-0 text-grey-darkest hover:text-black mr-4 lg:mr-6 no-underline cursor-pointer"
          href="https://blog.lichter.io?ref=thanks.lichter.io"
          target="_blank"
        >
          My blog
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import VueNextLevelScroll from 'vue-next-level-scroll'
import LightbulbIcon from '~/assets/icons/lightbulb.svg'

export default {
  components: {
    LightbulbIcon,
    MenuIcon: () => import('~/assets/icons/menu.svg'),
    VueNextLevelScroll
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
