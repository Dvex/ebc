import Vue from 'vue'
import Router from 'vue-router'
import QuienesSomos from '@/components/QuienesSomos'
import QueHacemos from '@/components/QueHacemos'
import PorQueLoHacemos from '@/components/PorQueLoHacemos'
import Conectate from '@/components/Conectate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/quienes.index',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/que.index',
      name: 'QueHacemos',
      component: QueHacemos
    },
    {
      path: '/porque.index',
      name: 'PorQueLoHacemos',
      component: PorQueLoHacemos
    },
    {
      path: '/conectate.index',
      name: 'Conectate',
      component: Conectate
    }
  ]
})
