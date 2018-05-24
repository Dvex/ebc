<template>
    <v-app>
    <header>
      <div class="logo">
        <a class="logo__link" href="#">
          <img class="logo__img" src="./assets/logo.png">
        </a>
      </div>
      <div>
        <v-btn class="primary">ENCUENTRA UNA CLASE</v-btn>
      </div>
    </header>
    <top-menu></top-menu>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
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
  font-family: 'Cabin', Helvetica, Arial, sans-serif;
}
header{
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  display: flex;
  height: 80px;
}
.logo__link{

}
.logo__img{
  min-width: 80px;
  width: 33%;
}
.logo__text{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
