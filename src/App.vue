<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <img src="./assets/logo.png">
          <top-menu></top-menu>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import TopMenu from './components/TopMenu'
  
  export default {
    name: 'App',
    components: {
      'top-menu': TopMenu
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
