<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
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
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as*
</style>