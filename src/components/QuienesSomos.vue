<template>
  <div>
    <div class="px-3">
      <v-tabs
        slot="extension"
        v-model="model"
        left
        color="cyan"
        slider-color="yellow"
      >
        <v-tab
          href="#tab-1"
        >
          Historia
        </v-tab>
        <v-tab
          href="#tab-2"
        >
          Filosofía
        </v-tab>
        <v-tab
          href="#tab-3"
        >
          Declaración de Fe
        </v-tab>
        <v-tab
          href="#tab-4"
        >
          Herramientas para iglesias
        </v-tab>
        <v-tab
          href="#tab-5"
        >
          Revista Digital
        </v-tab>
      </v-tabs>
    </div>
    <v-card class="transparent" flat>
      <v-card-text>
        <v-tabs-items v-model="model">
          <v-tab-item
            id="tab-1"
          >
            <div style="heigth: 200px;" class="text-xs-center">
              <img class="logo__img" src="../assets/img/oracion.png">
            </div>
          </v-tab-item>
          <v-tab-item
            id="tab-2"
          >
          2
          </v-tab-item>
          <v-tab-item
            id="tab-3"
          >
          3
          </v-tab-item>
          <v-tab-item
            id="tab-4"
          >
          4
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 'tab-1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style>
.tabs__bar{
  background: transparent !important;
}
.tabs__item--active{
  font-weight: bold;
}
</style>
