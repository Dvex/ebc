<template>
  <div class="historia">
    <v-container>
      <v-flex x12 md12>
        <img src="../../assets/img-historia.png" width="100%">
      </v-flex>
      <div class="historia-descrip">
        <v-flex xs12 md12 >
          <h1>Nuestra Historia</h1>
        </v-flex>
        <v-flex xs12 md12 >
          <p>
            La historia del Estudio Bíblico en Comunidad tiene sus raíces en la oración y es un deseo fuerte de ayudar a personas a crecer en su relación con Jesús mientras exploran la Biblia. Estos dis aspectos importantes explican quienes somos hoy y como fuimos en un inicio.
            Comenzó como un segundo estudio bíblico pequeño para personas en Washington DC. en Maryland en 1975.<br>
            Este estudio llego a Lima en 1980 como respuesta a la oración piadosa de siete años y ocho años después comenzó la primera clase en español en la Union Church de Miraflores. En 1993 nace oficialmente EBC Perú como una organización sin fines de lucro. Actualmente tenemos aproximadamente más de 100 clases de las cuales la mitad están ubicadas en Lima. Se dictan clases en Trujillo, Arequipa, Huanuco, Huancayo, Cajamarca, Puno, Pucallpa y otras ciudades del país.</p>
          <p>
            Actualmente EBC tiene Claes en más de 60 países. Los estudios han sido traducidos en más de 50 idiomas y tenemos más de 1000 clases alrededor del mundo. Existen estudios en Europa, Asia, Africa, las Américas y el Caribe.</p>
          <p>
            Dios ha bendecido este ministerio y con gratitud deseamos amar, servir y darle honor a El en todo lo que hacemos.
          </p>
        </v-flex>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return { }
  }
}
</script>
<style>

.historia h1{
  color:#AEAAAD;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:30px;
  text-transform:uppercase;
}
.historia .container{
  margin-top:-15px;
}
.historia-descrip{  
  padding-top:60px;  
}
.historia-descrip p{ 
  color:white; 
  margin-top:20px;
}
</style>