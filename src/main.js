import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmericas as faEarthAmericasSolid } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign as faDollarSignSolid } from '@fortawesome/free-solid-svg-icons'
import { faDroplet as faDropletSolid } from '@fortawesome/free-solid-svg-icons'
import { faStethoscope as faStethoscopeSolid } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap as faGraduationCapSolid } from '@fortawesome/free-solid-svg-icons'
import { faSeedling as faSeedlingSolid } from '@fortawesome/free-solid-svg-icons'
library.add(faHeartRegular, faEarthAmericasSolid, faDollarSignSolid, faDropletSolid, faStethoscopeSolid, faGraduationCapSolid, faSeedlingSolid)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
