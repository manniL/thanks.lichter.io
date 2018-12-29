<template>
  <div class="bg-grey-lighter text-base text-grey-darkest leading-normal">
    <Navbar />
    <Nuxt class="mx-auto md:px-0" />
    <AppFooter />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
    AppFooter: () => import('~/components/Footer')
  }
}
</script>
