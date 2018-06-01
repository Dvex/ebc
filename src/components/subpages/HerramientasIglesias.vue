<template>
  <div class="herramientas">
    <v-container>
      <v-flex xs12 md12>
        <img src="../../assets/img-herramientas.png" width="100%">
      </v-flex>
      <div class="herramientas-descrip">
        <v-flex xs12 md12>
          <h1>Herramientas para Iglesias</h1>
        </v-flex>
        <v-flex xs12 md12>
          <p>
          People from many different churches attend Community Bible Study classes because they feel it both complements the work of their local church and helps them grow spiritually. We encourage class members to belong to and actively support their local churches.
          </p>
          <p>As class members grow in faith and in their knowledge of God’s Word they become better equipped to serve in their home churches. Leadership skills learned in CBS increase commitment to Jesus Christ and in turn strengthen His body.</p>

          <p>We are grateful to the churches that grant us use of their facilities. It is our goal to leave the church property in even better condition than it was found; we want our presence to be a blessing.</p>

          <p>Leaders in CBS are volunteers who love the Lord and His Word and receive no remuneration. Only employees at the National Service Center in Colorado Springs, Colorado, and at the Training Office are compensated.</p>
        </v-flex>
      </div>
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
.herramientas h1{
  color:#AEAAAD;
  font-family: 'Gotham Medium';
  font-weight:normal;
  font-size:30px;
  text-transform:uppercase;
  text-align:left;
}
.herramientas .container{
  margin-top:-15px;
}
.herramientas-descrip{
  padding-top:50px;
}
.herramientas-descrip p{
  color:white;
  margin-top:20px;
}
</style>
