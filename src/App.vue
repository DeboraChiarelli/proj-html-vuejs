<script>
import AppHeader from './components/AppHeader.vue';
import AppMission from './components/AppMission.vue';
import AppFooter from './components/AppFooter.vue';
// import AppHero from './components/AppHero.vue';


export default {
  components: {
    AppHeader,
    AppMission,
    AppFooter,
    // AppHero
  },
  data() {
    return {
      logo: { src: './public/HelloIMG1669149314369.png', alt: 'Logo', text: '' },
      menuItems: [
        { text: 'Home', link: '#' },
        { text: 'Mission', link: '#' },
        { text: 'Causes', link: '#' },
        { text: 'Journal', link: '#' },
        { text: 'Donate', link: '#' }
      ]
    };
  }
}
</script>

<template>
  <AppHeader :logo="logo" :menu-items="menuItems" />
  <!-- <AppHero /> -->
  <AppMission />
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as*
</style>