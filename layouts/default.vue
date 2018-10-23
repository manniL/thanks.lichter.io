<template>
  <div class="bg-grey-lighter text-base text-grey-darkest leading-normal">
    <if-bot>
      <consent
        message="I use Cookies for user analysis and on-page improvements!"
        link-label="Learn about cookies"/>
    </if-bot>
    <navbar/>
    <nuxt class="mx-auto md:px-0"/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Consent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
import IfBot from 'vue-if-bot/dist/vue-if-bot.es'

export default {
  components: {
    IfBot,
    Consent,
    Navbar,
    AppFooter: () => import('~/components/Footer')
  }
}
</script>
