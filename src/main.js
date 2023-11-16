import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmericas as faEarthAmericasSolid } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign as faDollarSignSolid } from '@fortawesome/free-solid-svg-icons'
library.add(faHeartRegular, faEarthAmericasSolid, faDollarSignSolid)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
