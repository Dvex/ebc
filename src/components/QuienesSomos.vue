<template>
  <div>
    <div id="banner"></div>
    <v-container>
        <v-layout>
          <v-flex xs12>
            <h1 style="text-align:center">QUIÉNES SOMOS</h1>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12>
            <iframe style="margin: 2em 0" src="https://player.vimeo.com/video/270866497" width="100%" height="360"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <div id="image_family"></div>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 md6>
            <h1>Adultos</h1>
            <p>
              Somos un grupo diverso, así como tu y tus vecinos, somos estudiantes, trabajadores, profesionales, jubilados, amas de casa, mamás jóvenes, abuelos y abuelas. Aquí nos reunimos personas de todas las denominaciones cristianas, así como algunos que por primera vez sentimos la inquietud de estudiar la Biblia, que es la publicación más difundida, el libro más vendido y traducido en todo el planeta

              Las personas que la leemos reconocemos su efecto transformador, porque “la palabra de Dios es viva y eficaz”

              Contamos también con material fácil de entender para personas que no saben leer.
            </p>
          </v-flex>
          <v-flex xs12 md6>
            <h1>Niños y Jóvenes estudiantes</h1>
            <p>
              Los niños y jóvenes también pueden estudiar la biblia. Para ellos ofrecemos un estupendo material con historias bíblicas del antiguo y Nuevo Testamento.

              Los niños del colegio estudian los mismos pasajes que los adultos permitiendo a las familias conversar sobre la biblia juntos en casa.
            </p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 md6>
            <p></p>
          </v-flex>
          <v-flex xs12 md6>
            <h1>Lenguas</h1>
            <p>
              En Perú, tenemos material de estudio en castellano e inglés. Asimismo, estamos haciendo las gestiones necesarias para contar en corto plazo con material traducido al quechua y otras lenguas nativas. Tenemos mas de 20 estudios diferentes cubriendo la gran mayoría de los libros de la bilis.
            </p>
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
  #banner {
    width: 100%;
    min-height: 495px;
    height: auto;
    background: url(../assets/home-slide.jpeg) no-repeat transparent;
    background-size: cover;
  }
  #image_family {
    width: 100%;
    min-height: 300px;
    height: auto;
    background: url(../assets/family-home.png) no-repeat transparent;
    background-size: cover;
    background-position: center -130px;
    margin-bottom: 2em;
  }
</style>
