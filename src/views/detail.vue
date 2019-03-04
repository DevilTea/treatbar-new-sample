<template>
  <v-layout
    row
    wrap
    align-center
    justify-center
  >
    <v-img
      :src="detail.bgUrl"
      contain
      position="top center"
    >
      <v-layout
        column
        wrap
        align-center
        justify-center
      >
        <v-card
          style="margin-top: 100px"
          width="300"
        >
          <v-card-text class="title text-xs-right pb-0">
            <v-layout
              row
              wrap
              align-center
            >
              <img
                src="logo.png"
                style="width: 36px; height: 36px"
              />
              <v-spacer></v-spacer>
              <span class="ml-2 grey--text">招待Bar 招待您</span>
            </v-layout>

          </v-card-text>
          <v-card-text class="pt-0">
            <p class="text-xs-right ma-0">
              <span class="subheading grey--text">{{ detail.shopName }}</span>
              <br>
              <span class="title grey--text">{{ detail.itemName }}</span>
            </p>
          </v-card-text>
          <v-layout
            row
            wrap
          >
            <v-flex
              xs10
              offset-xs2
            >
              <v-img
                :src="detail.imgUrl"
                height="150"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card
          class="my-4"
          style="margin-top: 150px"
          width="300"
        >
          <v-card-text>
            <p class="">
              <span class="subheading grey--text">{{ detail.shop.name }}</span>
              <br>
              <span class="grey--text">{{ detail.shop.address }}</span>
              <br>
              <span class="grey--text">{{ detail.shop.phone }}</span>
              <br>
              <span class="grey--text">{{ detail.shop.time }}</span>
            </p>
          </v-card-text>
          <v-layout
            row
            wrap
            justify-center
            class="mb-3"
          >
            <v-flex xs10>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5755759702097!2d121.53004331499987!3d25.0484736839656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9639330143d%3A0x66a94a45ce031706!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDplbflronmnbHot6_kuozmrrU0OC01Mg!5e0!3m2!1szh-TW!2stw!4v1551684529627"
                width="100%"
                height="250"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-img>
  </v-layout>
</template>

<script>
import d from '@/assets/data.json'

export default {
  props: {
    index: Number
  },
  data () {
    return {
      detail: d.menu[this.$route.params.index]
    }
  }
}
</script>
