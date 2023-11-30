<template>
  <section class=" flex flex-wrap lg:h-screen lg:items-center">
    <div class="bg-c_black h-full w-1/2 ">
      <img alt="Bienvenido" src="./../assets/login.png" class="w-full h-2/3 object-cover" />
      <div class="flex flex-col justify-center px-12 py-6 h-1/3 border-t-4 border-c_primary ">
        <figure class="h-2 w-20">
          <img src="./../assets/logo_white.svg" alt="">
        </figure>
        <h2 class="font-semibold text-white text-5xl my-6 ">Dale más power⚡a tus empleados hoy 💪</h2>
        <p class="text-gray-300">Te ayudamos a gestionarlos de manera más sencilla</p>
      </div>
    </div>
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 relative">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Inicia sesión</h1>
      </div>
      <AuthForm />
      <div class="mx-auto absolute -bottom-20 left-1/2 transform -translate-x-1/2">
        <p class="text-gray-400 text-center">© 2023 Culqi. Todos los derechos reservados</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


import AuthForm from "./../components/auth/AuthForm.vue";

export default defineComponent({
  name: 'AuthView',
  components: {
    AuthForm
  },

});
</script>
  