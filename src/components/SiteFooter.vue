<template>
  <v-footer :fixed="fixed" app>
    <span>&copy; 2018</span>
  </v-footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.v-footer {
  border-top: 1px solid get-value($color, "gray", "default");
} // .v-footer
</style>
