<script>

export default {
    props: {
        // Definisco la prop per le voci del menu
        menuItemsFooter: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            icons: [
                { item: ['fab', 'facebook'] },
                { item: ['fab', 'instagram'] },
                { item: ['fab', 'twitter'] },
                { item: ['fab', 'youtube'] },
            ],
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
            <ul class="icon-container">
                <li class="menu-icon" v-for="icon in icons">
                    <a href="#"><font-awesome-icon :icon="icon.item" /></a>
                </li>
            </ul>
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
    flex-direction: column;
}

.items-menu {
    text-align: center; // Centra orizzontalmente
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%; // Assicura che la larghezza sia al 100%
    display: flex;
    justify-content: center;
}

a {
    text-decoration: none;
    color: black;
    font-size: 10px;
}

.icon-container {
    display: flex;
    justify-content: center;
    margin-top: 10px; // Imposta la distanza tra le voci del menu e le icone

}

.menu-icon a {
    padding: 10px;
    color: #FEC96B;
}
</style>