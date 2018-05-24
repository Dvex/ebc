<template>
  <div>
    <v-toolbar>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems" :to="item.path" :key="item.title" flat>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>FAQs</v-btn>
        <v-btn flat>DONA</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {

  },
  methods: {

  },
  data () {
    return {
      drawer: true,
      title: 'EBC',
      menuItems: [
        { title: 'Quiénes Somos', path: '/quienes.index' },
        { title: 'Qué Hacemos', path: '/que.index' },
        { title: 'Por qué lo Hacemos', path: '/porque.index' },
        { title: 'Conéctate', path: '/conectate.index' }
      ]
    }
  }
}
</script>
