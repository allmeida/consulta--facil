<template>
    <router-view />
</template>

<script>
import Usuario from "./views/Usuario.vue"

export default {
  name: 'App',
  components: {
    Usuario
  }  
};
</script>

<style>
#app {
  display: flex;
  min-height: 100%;
  min-height: 100vh;
  background: #FBDE40;
}

</style>
