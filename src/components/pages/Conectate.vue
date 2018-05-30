<template>
   <div class="contacto">
      <v-container>
        <div class="contacto-img">
          <img src="../../assets/img-contacto.png">
        </div>
        <h2>CONTÁCTANOS</h2>
        <p>Estaremos encantados de escucharte. Contáctate con nosotros a través de los siguientes medios:</p>
        <v-layout row wrap class="list-contacto">
          <v-flex md6 class="item-contacto">
            <strong>POR CORREO </strong>
            <a href="mailto:info@ebc.org.pe" target="_blank">info@ebc.org.pe</a>
          </v-flex>
          <v-flex md6 class="item-contacto">
            <strong>EN FACEBOOK </strong>
            <a href="www.facebook.com/ebcperu" target="_blank">www.facebook.com/ebcperu</a>
          </v-flex>
          <v-flex md6 class="item-contacto">
            <strong>POR TÉLEFONO </strong>
            <a href="tel:(51) 999 999 999" target="_blank">(51) 999 999 999</a>
            <a href="tel:(51) 999 999 999" target="_blank">(51) 999 999 999</a>
          </v-flex>
          <v-flex md6 class="item-contacto">
            <strong>EN YOUTUBE </strong>
            <a href="www.youtube.com/ebcperu" target="_blank">www.youtube.com/ebcperu</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
 .contacto{
    background:rgba(114,103,110,0.7);
    padding: 60px 0 50px 0;
  }
  .contacto h2{
    font-family: 'Gotham Medium';
    font-weight:normal;
    font-size:30px;
    margin-bottom:0;
  }
  .contacto p{
    margin-bottom:0;
  }
  .list-contacto{
    width:50%;
  }
  .item-contacto{
    margin-top:15px;
  }
  .item-contacto strong{
    font-family:'Gotham Medium';
    font-weight:normal;
    font-size:18px;
  }
</style>
