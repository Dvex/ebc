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
  background-image: url('assets/img-header.png');
  background-size: cover;
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
.toolbar__content{
  height: 45px !important;
}
.sub__menu{
background: rgba(94,84,92,1);
background: -moz-linear-gradient(top, rgba(94,84,92,1) 0%, rgba(94,84,92,1) 0%, rgba(156,151,155,1) 36%, rgba(158,153,157,1) 37%, rgba(255,255,255,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(94,84,92,1)), color-stop(0%, rgba(94,84,92,1)), color-stop(36%, rgba(156,151,155,1)), color-stop(37%, rgba(158,153,157,1)), color-stop(100%, rgba(255,255,255,1)));
background: -webkit-linear-gradient(top, rgba(94,84,92,1) 0%, rgba(94,84,92,1) 0%, rgba(156,151,155,1) 36%, rgba(158,153,157,1) 37%, rgba(255,255,255,1) 100%);
background: -o-linear-gradient(top, rgba(94,84,92,1) 0%, rgba(94,84,92,1) 0%, rgba(156,151,155,1) 36%, rgba(158,153,157,1) 37%, rgba(255,255,255,1) 100%);
background: -ms-linear-gradient(top, rgba(94,84,92,1) 0%, rgba(94,84,92,1) 0%, rgba(156,151,155,1) 36%, rgba(158,153,157,1) 37%, rgba(255,255,255,1) 100%);
background: linear-gradient(to bottom, rgba(94,84,92,1) 0%, rgba(94,84,92,1) 0%, rgba(156,151,155,1) 36%, rgba(158,153,157,1) 37%, rgba(255,255,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5e545c', endColorstr='#ffffff', GradientType=0 );
}
</style>
