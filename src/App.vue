<template>
  <v-app>
    <SiteAside />
    <SiteNavigation />
    <v-content>
      <HelloWorld />
    </v-content>
    <SiteFooter />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SiteAside from './components/SiteAside'
import SiteFooter from './components/SiteFooter'
import SiteNavigation from './components/SiteNavigation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SiteAside,
    SiteFooter,
    SiteNavigation
  },
  data () {
    return {
    }
  }
}
</script>
