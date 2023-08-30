<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
     
     <AppHeader></AppHeader>

     <main>
        <AppMain></AppMain>
     </main>
</template>

<style lang="scss">

main {
  padding-top: 40px;
  background-color: #3F4041;
}
</style>
