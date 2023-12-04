<template>
    <section class="container mx-auto flex items-center justify-evenly p-4 gap-10" id="home">
      <div class="flex flex-col">
        <h1 class="text-7xl font-bold">Cristian A. </h1>
        <span class="text-7xl text-c_primary font-bold mb-4">Chipana Huaman</span>
        <p class="text-lg font-bold mb-4">Full-Stack Developer</p>
        <div class=""> <!-- //Agregado contenedor flex para centrar el enlace verticalmente -->
          <a class="bg-c_primary text-xl font-bold px-6 py-2 rounded-xl inline-block cursor-pointer" @click="enviarMensaje">Conectar</a>
        </div>
      </div>
      <figure class="bg-yellow-300">
        <img src="@/assets/folio.jpg" alt="Folio">
      </figure>
    </section>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        
      const enviarMensaje = () => {
        const numeroTelefono = '+51935216950'; // Reemplazar con el número de teléfono deseado
      const mensaje = 'Hola, ¿cómo estás?...'; // Reemplazar con el mensaje deseado

      const urlWhatsApp = `https://wa.me/${encodeURIComponent(numeroTelefono)}?text=${encodeURIComponent(mensaje)}`;

      window.open(urlWhatsApp, '_blank');
      }

        return {
          enviarMensaje
        }
    }
})
</script>

<style scoped>

</style>