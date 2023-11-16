<script>
import AppHeader from './components/AppHeader.vue';
import AppMission from './components/AppMission.vue';
import AppFooter from './components/AppFooter.vue';
import AppValues from './components/AppValues.vue';


export default {
  components: {
    AppHeader,
    AppMission,
    AppFooter,
    AppValues
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
  <AppMission />
  <AppValues />
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as*
</style>