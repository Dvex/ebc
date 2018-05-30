<template>
  <div class="hacemos-content">
    <div class="hacemos-blockA">
      <v-container>
        <h1>POR QUÉ LO HACEMOS</h1>
        <div class="hacemos-img">
          <img src="../../assets/img-hacemos.png">
        </div>
        <div>
        <p>
          No hay momento más maravilloso que ese en que Dios toma nuestro corazón y nuestra mente y nos invita a iniciar este viaje de descubrimiento. Las grandes preguntas de ¿quienes somos? ¿por qué estamos aquí? Ya tienen respuesta, porque “la palabra de Dios es viva y eficaz”. Nuestra experiencia da como resultado que “crecemos en conocer y amar más a Dios”.
          </p>
          <p>
          Tenemos muchas historias de sanción y amistas, restauración, crecimiento  y perseverancia, gozo en medio de la adversidad, de triunfo.
          </p>
          <p>
          Si eres nuevo en el estudio de la Biblia, “Estudios Bíblicos en Comunidad” (EBC), nos ofrece la oportunidad de crecer en la Fé en Jesucristo, y conocer personas que comparten el mismo deseo.
          </p>
        </div>
      </v-container>
    </div>

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
  .content{
    background:none;
  }
  .hacemos-content,
  .hacemos-content a{
    color: white;
  }
  .hacemos-content a{
    display:block;
    text-decoration: none;
  }
  .hacemos-content a,
  .hacemos-content p{
    font-family: 'Exo 2 Light';
    font-size:15px;
  }
  .hacemos-content p{
    line-height:19.5px;
    margin-top: 20px;
  }
  .hacemos-img {
    margin-bottom:25px;
    text-align:center;
  }
  .hacemos-img img{
    max-width:100%;
    width: 100%;
  }
  .hacemos-blockA{
    background: rgba(255,255,255,1);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(11%, rgba(156,151,155,1)), color-stop(41%, rgba(123,116,121,1)), color-stop(100%, rgba(57,46,54,1)));
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(156,151,155,1) 11%, rgba(123,116,121,1) 41%, rgba(57,46,54,1) 100%);
    background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(156,151,155,1) 11%, rgba(123,116,121,1) 41%, rgba(57,46,54,1) 100%);
    background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(156,151,155,1) 11%, rgba(123,116,121,1) 41%, rgba(57,46,54,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(156,151,155,1) 11%, rgba(123,116,121,1) 41%, rgba(57,46,54,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#392e36', GradientType=0 );
    padding: 50px 0 60px 0;
  }
  .hacemos-blockA h1{
    margin-bottom:40px;
  }
</style>
