<template>
  <div class="default">
    <TheHeader @sidenavToggle="displaySidenav=!displaySidenav"/>
    <TheSideNav :show="displaySidenav" @close="displaySidenav=false"/>
    <Nuxt />
  </div>
</template>

<script>
  import TheHeader from '@/components/Navigation/TheHeader'
  import TheSideNav from '@/components/Navigation/TheSidenav'

  export default{
    middleware: 'log',
    components: {
      TheHeader: TheHeader,
      TheSideNav: TheSideNav
    },
    data() {
      return {
        displaySidenav: false
      }
    },
  }
</script>

<style>
  html{
    font-family: 'Open Sans', sans-serif;
  }
  body{
    margin: 10px;
  }
</style>
