<template>
  <nav class="">
    <div class="container mx-auto flex items-center justify-between p-4">
      <router-link to="/" class="text-white text-2xl font-bold">😁...🌲</router-link>
      <div class="space-x-4 flex items-center">
        <router-link to="/" class="font-medium p-4">Home</router-link>
        <router-link to="/eventos" class="font-medium p-4">About</router-link>
        <router-link to="/servicio" class="font-medium p-4">Service</router-link>
        <router-link to="/portafolio" class="font-medium p-4">Portfolio</router-link>
        <router-link to="/contacto" class="font-medium p-4">Contact</router-link>
        <span class="mx-2">|</span>
        <router-link to="/contacto" class="font-medium"><i class="fab fa-facebook-f"></i></router-link>
        <router-link to="/contacto" class="font-medium"><i class="fab fa-twitter"></i></router-link>
        <router-link to="/contacto" class="font-medium"><i class="fab fa-linkedin-in"></i></router-link>
        <router-link to="/contacto" class="font-medium"><i class="fab fa-instagram"></i></router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>