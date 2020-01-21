<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <logo />
            <h1 class="title">
              {{ app.title }}
            </h1>
            <div class="mb-5">
              {{ app.description }}
            </div>
            <v-btn
              x-large
              rounded
              @click="$router.push({ name: 'jobs' })"
            >
              <v-icon color="success">mdi-arrow-right</v-icon>
              Get Started
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'none',
  
  components: {
    Logo
  },

  data: () => ({
    app: {
      title: process.env.title,
      description: process.env.description,
    }
  }),
}
</script>