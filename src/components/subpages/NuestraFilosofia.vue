<template>
  <div class="filosofia">
    <v-container>
      <v-flex x12 md12>
        <img src="../../assets/img-filosofia.png" width="100%">
      </v-flex>
      <v-flex xs12 md12>
        <h1>Nuestra Filosofia</h1>
      </v-flex>

      <v-flex xs12 md12>
        <p>
        La filosofía de nuestro ministerio está guiado por los siguiente principios:
        </p>
        <h2>Oracion</h2>
        <p>
        Es el punto de partida para nuestras decisiones y nuestras actividades, en todo lo que hacemos.
        </p>
        <h2>Hospitalidad</h2>
        <p>Queremos que cada persona que asista a una clase de EBC se sienta cuidada, amada, protegida independientemente  de su educación, iglesia, raza, y nivel socioeconómico. Nuestro deseo es construir unidad en medio de la diversidad.</p>
        <h2>No Denominacional</h2>
        <p>Nos concertamos en los esencial de la fe cristiana, no en distintivos denominaciones para crecer en amor y respeto mutuos. Aprendemos que los Cristianos pueden tener distintos puntos de vista sobre cuestiones que no son esenciales para la salvación.</p>
        <h2>Desarrollo de Liderazgo</h2>
        <p>Nuestros lideres EBC son personas voluntarias que se sienten llamadas por Dios para ejercer un servicio ocio basado en su amor por El, ofrecen su tiempo y talento para discípulas de tal modo que cada participante se siente cuidado y conectado con la palabra De Dios. Cada líder está equipado debidamente para realizar su función y debe asistir a sesiones de enriquecimiento espiritual y formación permanente.</p>
        <h2>Excelencia</h2>
        <p>Tenemos un manual que permite el desarrollo eficaz con pautas que se han desarrollado y han dado buenos resultados. Buscamos la excelencia en el servicio que brindamos.</p>
      </v-flex>
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
.filosofia{
  background:white;
}
.filosofia h1{
  color:#675F65;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:30px;
  margin-bottom:7px;  
  margin-top:50px;
  text-transform:uppercase; 
  text-align:left;
}
.filosofia .container{
  margin-top:-15px;
}
.filosofia h2{
  color:#7F787D;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:22.5px;
  margin:0 0 -5px 0;
  text-transform:uppercase;  
}
.filosofia p{
  color:black;
  margin-top:0;
  margin-bottom:20px;
}

</style>