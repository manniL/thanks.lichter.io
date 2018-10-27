<template>
  <div class="bg-grey-lighter text-base text-grey-darkest leading-normal">
    <navbar/>
    <nuxt class="mx-auto md:px-0"/>
    <app-footer/>
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
