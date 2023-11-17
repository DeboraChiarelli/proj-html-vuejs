import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmericas, faDollarSign, faDroplet, faStethoscope, faGraduationCap, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faHeart, faEarthAmericas, faDollarSign, faDroplet, faStethoscope, faGraduationCap, faSeedling, faFacebook, faInstagram, faTwitter, faYoutube)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
