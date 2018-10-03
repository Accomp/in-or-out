<template>
  <v-toolbar app>
    <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'SiteNavigation',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar {
  border-bottom: 1px solid get-value($color, "gray", "default");
  box-shadow: none;
} // .v-toolbar
</style>
