import Vue from 'vue'
import Router from 'vue-router'
/* Pages */
import QuienesSomos from '@/components/pages/QuienesSomos'
import QueHacemos from '@/components/pages/QueHacemos'
import PorQueLoHacemos from '@/components/pages/PorQueLoHacemos'
import Conectate from '@/components/pages/Conectate'

/* Sub-Pages */
import DeclaracionDeFe from '@/components/subpages/DeclaracionDeFe'
import HerramientasIglesias from '@/components/subpages/HerramientasIglesias'
import NuestraFilosofia from '@/components/subpages/NuestraFilosofia'
import NuestraHistoria from '@/components/subpages/NuestraHistoria'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/quienes-somos.index',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/que-hacemos.index',
      name: 'QueHacemos',
      component: QueHacemos
    },
    {
      path: '/porque-lo-hacemos.index',
      name: 'PorQueLoHacemos',
      component: PorQueLoHacemos
    },
    {
      path: '/conectate.index',
      name: 'Conectate',
      component: Conectate
    },
    {
      path: '/declaracion-de-fe.index',
      name: 'DeclaracionDeFe',
      component: DeclaracionDeFe
    },
    {
      path: '/herramientas-para-iglesias.index',
      name: 'HerramientasIglesias',
      component: HerramientasIglesias
    },
    {
      path: '/nuestra-filosofia.index',
      name: 'NuestraFilosofia',
      component: NuestraFilosofia
    },
    {
      path: '/nuestra-historia.index',
      name: 'NuestraHistoria',
      component: NuestraHistoria
    }
  ]
})
