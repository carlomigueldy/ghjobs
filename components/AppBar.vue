<template>
  <div>
    <v-app-bar
      app
      color="blue accent-4"
      flat
      dark
    >
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      clipped
      dark
    >
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="title">
                {{ app.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
                {{ app.description }}
            </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
    
        <v-list
            dense
            nav
            rounded
        >
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="$router.push({ name: item.route })"
                rounded
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data: () => ({
        title: process.env.title,
        drawer: false,
        items: [
            {
                icon: 'mdi-view-dashboard',
                title: 'Dashboard',
                route: 'index',
            }
        ],
        app: {
            title: process.env.title,
            description: process.env.description,
        }
    })
}
</script>