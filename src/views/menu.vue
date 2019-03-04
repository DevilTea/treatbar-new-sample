<template>
  <v-layout
    row
    wrap
    align-center
    justify-center
  >
    <v-card
      v-for="(i, index) in menu"
      :key="index"
      class="ma-2"
      width="350"
      :to="'' + index"
    >
      <v-card-title primary-title>
        <span class="body-2 grey--text">{{ i.shop.name }}</span>
        <v-spacer></v-spacer>
        <span class="subheading grey--text">{{ i.itemName }}</span>
      </v-card-title>
      <v-layout
        row
        wrap
      >
        <v-flex xs9 offset-xs3>
          <v-img
            :src="i.imgUrl"
            height="150"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>
import d from '@/assets/data.json'

export default {
  data () {
    return {
      menu: d.menu
    }
  }
}
</script>
