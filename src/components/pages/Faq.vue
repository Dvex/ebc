<template>
  <div class="faq">
    <v-container>
      <v-flex x12 md12>
        <img src="../../assets/img-preguntas.png" width="100%">
      </v-flex>
      <div class="declaracion-descrip">
        <v-flex xs12 md12 style="text-align:center">
          <h1>Preguntas Frecuentes</h1>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Pertenecen a alguna denominación?</h4>
          <p>No.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Cuál es la relación con la Iglesia local?</h4>
          <p>EBC es una herramienta a disposición de las Iglesias que quieran contar con los distintos cursos que ofrece.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Cómo encuentro una clase cerca a mí?</h4>
          <p>Haz clic en <a href="#" target="_blank">Encuentra una clase.</a></p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Tienen clases para varias edades?</h4>
          <p>Sí, en determinadas ubicaciones</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Dónde se reúnen las clases?</h4>
          <p>Haz clic en <a href="#" target="_blank">Encuentra una clase.</a> y podrás ver las diferentes ubicaciones.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Cuándo y qué tan seguido se reúnen las clases?</h4>
          <p>Una vez por semana. Dependiendo del grupo. Para más información debes contactar al líder del grupo.</p>
        </v-flex><v-flex class="faq-item" xs12 md12>
          <h4>¿Qué versión Biblica usan?</h4>
          <p>Utilizamos todas las versiones cristianas.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Cuál es el costo de una clase?</h4>
          <p>Para esta información debes contactar al líder del grupo.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Realizan tareas para profundizar el conocimiento de la Biblia?</h4>
          <p>Si.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Tendré que hablar al frente de la clase?</h4>
          <p>Siendo un estudio en comunidad, lo ideal es que parti.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Qué sucede si pierdo una clase?</h4>
          <p>Tu líder se comunica contigo para enviarte la siguiente lección y así estés siempre al día.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Puedo asistir a una clase que ya haya comenzado?</h4>
          <p>Sí.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>No puedo encontrar una clase por donde vivo. ¿Puedo iniciar una nueva clase?</h4>
          <p>Sí. Sólo necesitas recibir capacitación.</p>
        </v-flex>
        <v-flex class="faq-item" xs12 md12>
          <h4>¿Tienen clases en otros país</h4>
          <p>Sí. Puedes revisar este <a href="#" target="_blank">enlace.</a></p>
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
.faq{
    background:white;
}
.faq h1{
  color:#AEAAAD;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:30px;
  text-transform:uppercase;
  text-align:left;
}
.faq .container{
  margin-top:-15px;
}
.faq-descrip{
  padding-top:50px;
}
.faq-item{
  margin-top:20px;
}
.faq-item h4{
    color:black;
    font-family: 'Gotham Medium';
    font-weight:normal;
    font-size:18px;
}

.faq-item p{
    color:#675F65;
    margin-left: 15px;
}
.faq-item a{
    color:#675F65;
    font-family: 'Exo 2 Light';
    font-size:15px;
    text-decoration:underline;
}
</style>
