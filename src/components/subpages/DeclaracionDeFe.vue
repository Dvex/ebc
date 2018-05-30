<template>
  <div class="declaracion">
    <v-container>
      <v-flex x12 md12>
        <img src="../../assets/img-declaración.png" width="100%">
      </v-flex>
      <div class="declaracion-descrip">
        <v-flex xs12 md12 style="text-align:center">
          <h1>Declaración de Fe</h1>
        </v-flex>

        <v-flex xs12 md12>
          <p>
            CREEMOS que la Biblia, tanto el antiguo como el nuevo testamento, es la revelación divina y palabra inspirada por Dios, infalible en los manuscritos originales. Su enseñanza es la autoridad final para toda la vida cristiana, en materia de fe.
          </p>
          <p>
          CREEMOS en la unidad del Dios trino: Padre-Hijo-Espíritu Santo, idénticos en naturaleza: todo-poderoso, omnisciente, omnipresente, que nunca cambia, infinitamente perfecto en amor, verdad, justicia, bondad, gracia y misericordia.
          </p>

          <p>
          CREEMOS que Jesucristo, el hijo de Dios, es Dios y hombre,dos naturalezas en uno, que fue concebido por el espíritu Santo y nacido de la virgen María. Realizó milagros para manifestar su deidad, vivió una vida sin pecado, sufrió y murió y como sacrificio completamente satisfactorio, cargó con el pecado de todo el mundo. El resucitó en el tercer día garantizado la resurrección de todos aquellos que creen en El. Ascendió a la diestra de Dios Padre donde reina sobre el universo, intercede por los creyentes y vendra de nuevo para establecer su reino.
          </p>

          <p>
          CREEMOS que el hombre fue creado a imagen de Dios pero cayó en desobediencia por una decisión voluntaria y como consecuencia quedó separado de Dios. Por tanto, murió espiritualmente sujetándose a la muerte física. Esta naturaleza caída fue transmitida a toda la humanidad excepto a Jesucristo, quien vivió una vida sin pecado. La sangre de Cristo fue derramada para nuestra redención. Sólo aquellos que reciben a Cristo por fe son perdonados, nacidos del Espíritu Santo y se vuelven hijos de Dios. La Fe por sí sola es la condición de salvación, pero las obras y una vida justa deben acompañar y mostrar evidencia de su existencia.
          </p>
          <p>
          CREEMOS que el Espíritu Santo habita y sella a cada creyente que recibe salvación por Fe. El ministerio del Espíritu Santo es glorificar a Jesucristo, nuestro Señor. Y mientras estemos aquí en la tierra, convence al hombre de su pecado, regenera al pecador, habita, guía, instruye y empodera al creyente para una vida separada para Dios y de servicio. Creemos que todos los cristianos deben dar testimonio del poder de Cristo con sus vidas.
          </p>
          <p>
          CREEMOS que la iglesia compuesta por todos los que creen y aceptan a Jesucristo como su Salvador, se unen en un solo cuerpo del cual El es la cabeza. Como miembros del iglesia es nuestra responsabilidad, mantener la unidad del Espíritu con lazos de paz, apoyando la iglesia local y amándonos unos a otros con un corazón puro.
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
.declaracion h1{
  color:#AEAAAD;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:30px;
  text-transform:uppercase;
  text-align:left;
}
.declaracion .container{
  margin-top:-15px;
}
.declaracion-descrip{
  padding-top:50px;
}
.declaracion-descrip p{
  color:white;
  margin-top:20px;
}
</style>
