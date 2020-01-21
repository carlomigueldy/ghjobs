<template>
  <v-app>
    <app-top-nav />
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <app-bottom-nav />
  </v-app>
</template>

<script>
import BottomNav from '@/components/BottomNav'
import AppBar from '@/components/AppBar'

export default {
  components: {
    'app-bottom-nav': BottomNav,
    'app-top-nav': AppBar,
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>