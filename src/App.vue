<template>
  <v-app>
    <v-toolbar v-if="$route.name === 'menu'" app flat color="transparent" absolute>
      <v-toolbar-title>
        <v-layout row wrap align-center>
          <img src="logo.png" style="width: 36px; height: 36px"/>
          <span class="ml-2 grey--text">招待Bar</span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-layout row wrap align-center>
          <v-icon color="grey">fa-bars</v-icon>
          <span class="ml-2 caption grey--text">所有店家</span>
        </v-layout>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer class="px-3" height="auto" color="transparent">
      <v-layout column wrap class="caption grey--text py-3">
        <span>聯絡我們：service@future-sync.co</span>
        <span>2019 十維度股份有限公司</span>
        <span>All Rights Reserved</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style>
 body {
   font-family: Helvetica, Arial, "文泉驛正黑", "WenQuanYi Zen Hei", "儷黑 Pro",
    "LiHei Pro", "黑體-繁", "Heiti TC", "微軟正黑體", "Microsoft JhengHei",
    sans-serif !important;
 }
</style>
