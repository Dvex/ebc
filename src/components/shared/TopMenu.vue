<template>
  <div>
    <v-toolbar>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems" :to="item.path" :key="item.title" @click.native="showSubMenu(item.path)" flat>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat :to="Faq">FAQs</v-btn>
        <v-btn flat>DONA</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Sub-menu Quienes Somos -->
    <v-toolbar class="sub__menu" v-if="activeFSubMenu">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in firstSubItems" :to="item.path" :key="item.title" flat>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Sub-menu Que Hacemos -->
    <v-toolbar class="sub__menu" v-if="activeSSubMenu">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in secondSubItems" :to="item.path" :key="item.title" flat>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {

  },
  methods: {
    showSubMenu (path) {
      switch (path) {
        case '/quienes-somos':
          this.activeFSubMenu = true
          this.activeSSubMenu = false
          break
        case '/que-hacemos':
          this.activeFSubMenu = false
          this.activeSSubMenu = true
          break
        default:
          this.activeFSubMenu = false
          this.activeSSubMenu = false
          break
      }
    }
  },
  data () {
    return {
      drawer: true,
      activeFSubMenu: false,
      activeSSubMenu: false,
      title: 'EBC',
      menuItems: [
        { title: 'Quiénes Somos', path: '/quienes-somos' },
        { title: 'Qué Hacemos', path: '/que-hacemos' },
        { title: 'Por qué lo Hacemos', path: '/porque-lo-hacemos' },
        { title: 'Conéctate', path: '/conectate' }
      ],
      firstSubItems: [
        { title: 'Historia', path: '/nuestra-historia' },
        { title: 'Filosofía', path: '/nuestra-filosofia' },
        { title: 'Declaración de fe', path: '/declaracion-de-fe' },
        { title: 'Herramientas para iglesias', path: '/herramientas-para-iglesias' },
        { title: 'Revista Digital', path: '/conectate' }
      ],
      secondSubItems: [
        { title: 'Adultos', path: '/que-hacemos' },
        { title: 'Niños y Jóvenes', path: '/que-hacemos' },
        { title: 'Jóvenes adultos', path: '/que-hacemos' },
        { title: 'Estudio Bíblico en prisión', path: '/que-hacemos' },
        { title: 'Método de enseñanza', path: '/que-hacemos' }
      ]
    }
  }
}
</script>
<style>
.application--wrap nav.toolbar {
  background-color: rgba(105, 152, 157, 0.8);
  color: rgba(105, 152, 157, 0.8);
}
.application--wrap nav.toolbar .toolbar__content .toolbar__items {
  margin: 0 !important;
}
.application--wrap nav.toolbar .btn {
  color: white;
}
.application--wrap nav.toolbar .btn--active, .application--wrap nav.toolbar .btn:hover {
  background-color: rgba(89, 142, 148, 1) !important;
}

.application--wrap nav.toolbar.sub__menu {
  background-color: rgba(114, 103, 110, 0.65);
  color: rgba(114, 103, 110, 0.8);
}
.application--wrap nav.toolbar.sub__menu .btn {
  color: black;
}
.application--wrap nav.toolbar.sub__menu .btn--active, .application--wrap nav.toolbar .btn:hover {
  background-color: transparent !important;
  font-weight: bold;
}
</style>
