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
        <router-view/>
      </v-content>
    </v-app>
</template>

<script>
import TopMenu from './components/shared/TopMenu'

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
  padding: 0 3em;
}
.logo{
  display: flex;
  height: 80px;
}
/*.logo__link{

} */
.logo__img{
  min-width: 80px;
  width: 33%;
}
.logo__text{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  background: #72676E;
}
.container{
  max-width: 1024px;
}

p{
  color:#393938;
  font-family: 'Exo 2 Light';
  font-size:15px;    
  line-height:19.5px;
}

</style>
