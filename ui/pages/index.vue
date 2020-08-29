<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      .text-center
        logo
          vuetify-logo.
      v-card
        v-card-title.headline.
        v-card-text.
        v-card-actions
          v-spacer
            v-btn(color='primary' nuxt to='/inspire').
              Continue
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
