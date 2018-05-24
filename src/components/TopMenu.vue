<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" light>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          v-if="item.show"
          :key="item.title"
          :router="true"
          :href="{ name: item.path }">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems () {
      return {
        menuItems: [
          { title: 'Quiénes Somos', path: 'home.index' },
          { title: 'Qué Hacemos', path: 'what.index' },
          { title: 'Por qué lo Hacemos', path: 'why.index' },
          { title: 'Conéctate', path: 'contactus.index' }
        ]
      }
    }
  },
  methods: {},
  data () {
    return {
      drawer: false,
      title: 'EBC'
    }
  }
}
</script>
