<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default {
    // components: {
    //     FontAwesomeIcon,
    // },
    props: {
        // Definisco la prop per le voci del menu
        menuItemsFooter: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            // menuIcons: [
            //     { icon: faFacebook, alt: 'Icon 1' },
            //     { icon: faInstagram, alt: 'Icon 2' },
            //     { icon: faTwitter, alt: 'Icon 3' },
            //     { icon: faYoutube, alt: 'Icon 4' },
            // ],
        };
    },
};
</script>


<template>
    <footer>
        <nav class="menu-container">
            <!-- Utilizzo le voci del menu passate tramite props -->
            <ul class="items-menu">
                <li v-for="(menuItemFooter, index) in menuItemsFooter" :key="index">
                    <a :href="menuItemFooter.link">{{ menuItemFooter.text }}</a>
                </li>
            </ul>
            <!-- <div class="icon-container">
                            <font-awesome-icon v-for="(icon, iconIndex) in menuIcons" :key="iconIndex" :icon="icon.icon"
                                :alt="icon.alt" />
                        </div> -->
        </nav>
    </footer>
</template>
  
 
<style lang="scss" scoped>
.menu-container {
    max-width: 1800px;
    display: flex;
    padding: 10px;
    margin: 0 auto;
    background-color: #F9F9F9;
}

.items-menu {
    text-align: center; // Centra orizzontalmente
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%; // Assicura che la larghezza sia al 100%
}

.items-menu li {
    display: inline-block; // Permette di centrare gli elementi orizzontalmente
    margin: 0;
}

a {
    text-decoration: none;
    color: black;
    font-size: 10px;
}

// .icon-container {
//     display: flex;
//     justify-content: center;
//     margin-top: 10px; // Imposta la distanza tra le voci del menu e le icone
// }
</style>