<script>
// Dichiarazioni di importazione
import AppHeader from './components/AppHeader.vue';
import AppMission from './components/AppMission.vue';
import AppValues from './components/AppValues.vue';
import AppCauses from './components/AppCauses.vue';
import AppArticles from './components/AppArticles.vue';
import AppChange from './components/AppChange.vue';
import AppLogo from './components/AppLogo.vue';
import AppFooter from './components/AppFooter.vue';

// Esportazione dei componenti
export default {
  components: {
    AppHeader,
    AppMission,
    AppFooter,
    AppValues,
    AppCauses,
    AppArticles,
    AppChange,
    AppLogo
  },
  // La funzione data restituisce un oggetto logo e array per menuItems e menuItemsFooter, che poi verranno usati nel template relativo.
  data() {
    return {
      logo: { src: './public/HelloIMG1669149314369.png', alt: 'Logo', text: '' },
      menuItems: [
        { text: 'Home', link: '#' },
        { text: 'Mission', link: '#' },
        { text: 'Causes', link: '#' },
        { text: 'Journal', link: '#' },
        { text: 'Donate', link: '#' }
      ],
      menuItemsFooter: [
        { text: "Copyright 2012-2022|", link: "#" },
        { text: "Avada Theme by ThemeFusion|", link: "#" },
        { text: "All rights reserved|", link: "#" },
        { text: "Powered by WordPress", link: "#" }
      ],
    };
  }
}
</script>

<template>
  <AppHeader :logo="logo" :menu-items="menuItems" />
  <AppMission />
  <AppValues />
  <AppCauses />
  <AppArticles />
  <AppChange />
  <AppLogo />
  <AppFooter :menuItemsFooter="menuItemsFooter" />
</template>

<style lang="scss">
@use './styles/general.scss' as*
</style>