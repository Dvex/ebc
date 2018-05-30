<template>
  <div class="quienes">
    <div id="banner"></div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <h1 style="text-align:center; color:white">QUIÉNES SOMOS</h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md12>
          <div style="padding:56.25% 0 5% 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/270866497?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        </v-flex>
      </v-layout>
      <v-flex xs12 md12 style="background:white;"></v-flex>
      <v-layout>
        <v-flex xs12 md12>
          <div id="image_family"></div>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12>
          <h2>Adultos</h2>
          <p>
            Somos un grupo diverso, así como tu y tus vecinos, somos estudiantes, trabajadores, profesionales, jubilados, amas de casa, mamás jóvenes, abuelos y abuelas. Aquí nos reunimos personas de todas las denominaciones cristianas, así como algunos que por primera vez sentimos la inquietud de estudiar la Biblia, que es la publicación más difundida, el libro más vendido y traducido en todo el planeta

            Las personas que la leemos reconocemos su efecto transformador, porque “la palabra de Dios es viva y eficaz”

            Contamos también con material fácil de entender para personas que no saben leer.
          </p>
        </v-flex>
      </v-layout>
      <v-layout class="quienes-estudiantes">
        <v-flex xs12>
          <h2>ESTUDIANTES NIÑOS Y JÓVENES</h2>
          <p>
            Los niños y jóvenes también pueden estudiar la biblia. Para ellos ofrecemos un estupendo material con historias bíblicas del antiguo y Nuevo Testamento.</p>

          <p>  Los niños del colegio estudian los mismos pasajes que los adultos permitiendo a las familias conversar sobre la biblia juntos en casa.
          </p>
        </v-flex>
      </v-layout>
      <v-layout class="quienes-idiomas">
        <v-flex md6 xs12>
          <h2>Idiomas</h2>
          <p>
            En Perú, tenemos material de estudio en castellano e inglés. Asimismo, estamos haciendo las gestiones necesarias para contar en corto plazo con material traducido al quechua y otras lenguas nativas. Tenemos mas de 20 estudios diferentes cubriendo la gran mayoría de los libros de la bilis.
          </p>
        </v-flex>
        <v-flex md6 xs12 >
          <img src="../../assets/img-quienes.png">
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
  /*@import url('../../../dist/static/css/fonts.css');*/
  #banner {
    width: 100%;
    min-height: 495px;
    height: auto;
    background: url(../../assets/home-slide.png) no-repeat transparent;
    background-size: cover;
  }
  #image_family {
    width: 100%;
    min-height: 300px;
    height: auto;
    background: url(../../assets/family-home.png) no-repeat transparent;
    background-size: cover;
    background-position: center -130px;
    margin-bottom: 2em;
  }
  h1{
    font-family: 'Gotham Light';
    font-weight:normal;
    font-size:30px;
    text-align:center;
  }

  .quienes{
    background: rgba(57,45,54,1);
    background: -moz-linear-gradient(top, rgba(57,45,54,1) 25%, rgba(171,166,170,1) 56%, rgba(175,170,174,1) 57%, rgba(252,252,252,1) 78%);
    background: -webkit-gradient(left top, left bottom, color-stop(25%, rgba(57,45,54,1)), color-stop(56%, rgba(171,166,170,1)), color-stop(57%, rgba(175,170,174,1)), color-stop(78%, rgba(252,252,252,1)));
    background: -webkit-linear-gradient(top, rgba(57,45,54,1) 25%, rgba(171,166,170,1) 56%, rgba(175,170,174,1) 57%, rgba(252,252,252,1) 78%);
    background: -o-linear-gradient(top, rgba(57,45,54,1) 25%, rgba(171,166,170,1) 56%, rgba(175,170,174,1) 57%, rgba(252,252,252,1) 78%);
    background: -ms-linear-gradient(top, rgba(57,45,54,1) 25%, rgba(171,166,170,1) 56%, rgba(175,170,174,1) 57%, rgba(252,252,252,1) 78%);
    background: linear-gradient(to bottom, rgba(57,45,54,1) 25%, rgba(171,166,170,1) 56%, rgba(175,170,174,1) 57%, rgba(252,252,252,1) 78%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#392d36', endColorstr='#fcfcfc', GradientType=0 );
  }
  .quienes h1{
    margin-top:30px;
    margin-bottom:10px;
  }
  .quienes h2{
    color:#675F65;
    margin-bottom:10px;
    font-family: 'Gotham Medium';
    font-weight:normal;
    font-size:30px;
    text-transform:uppercase;
  }
  .quienes p{
    color:#393938;
    font-family: 'Exo 2 Light';
    font-size:15px;
    line-height:19.5px;
  }
  .quienes-estudiantes{
    border-top: 2px solid #7D767B;
    border-bottom: 2px solid #7D767B;
    margin:20px 0 30px 0;
    padding:20px 0;
    position:relative;
  }
  .quienes-idiomas div:nth-of-type(2){
    text-align:center;
  }
</style>
