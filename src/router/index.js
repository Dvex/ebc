import Vue from 'vue'
import Router from 'vue-router'
/* Pages */
import QuienesSomos from '@/components/pages/QuienesSomos'
import QueHacemos from '@/components/pages/QueHacemos'
import PorQueLoHacemos from '@/components/pages/PorQueLoHacemos'
import Conectate from '@/components/pages/Conectate'
import Faq from '@/components/pages/Faq'

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
      path: '/quienes-somos',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/que-hacemos',
      name: 'QueHacemos',
      component: QueHacemos
    },
    {
      path: '/porque-lo-hacemos',
      name: 'PorQueLoHacemos',
      component: PorQueLoHacemos
    },
    {
      path: '/conectate',
      name: 'Conectate',
      component: Conectate
    },
    {
      path: '/declaracion-de-fe',
      name: 'DeclaracionDeFe',
      component: DeclaracionDeFe
    },
    {
      path: '/herramientas-para-iglesias',
      name: 'HerramientasIglesias',
      component: HerramientasIglesias
    },
    {
      path: '/nuestra-filosofia',
      name: 'NuestraFilosofia',
      component: NuestraFilosofia
    },
    {
      path: '/nuestra-historia',
      name: 'NuestraHistoria',
      component: NuestraHistoria
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ],
  mode: 'history'
})
