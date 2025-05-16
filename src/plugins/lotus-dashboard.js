import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'

import '../assets/scss/wass.scss'
import '../assets/scss/style.scss'

export default {
  install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
  }
}
