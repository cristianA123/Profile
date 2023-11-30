<script lang="ts" src="./AuthForm.ts"></script>

<template>
  <form @submit.prevent="onSubmit" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="email" class="">Correo electronico<span class="text-red-500">*</span></label>

          <div class="relative mt-1">
            <input type="email" required class="w-full rounded-lg  border-gray-300 border p-4 pe-12 text-sm shadow-sm"
              placeholder="example@gmail.com" v-model="email"/>
          </div>
        </div>

        <div>
          <label for="password" class="">Contraseña<span class="text-red-500">*</span></label>

          <div class="relative mt-1">
            <input type="password" required class="w-full rounded-lg border-gray-300 border p-4 pe-12 text-sm shadow-sm"
              placeholder="***********" v-model="password"/>
          </div>
        </div>
        <p v-if="authError" class="text-sm text-red-500">
          <font-awesome icon="fa-solid fa-circle-exclamation" class="pr-2"/>Correo o contraseña incorrectos
        </p>
        <p v-else class="invisible"><font-awesome icon="fa-solid fa-circle-exclamation" class="pr-2"/>.</p>
        <div>
          <button type="submit" class="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white w-full">
            Iniciar sesión
          </button>
        </div>
        <div class="flex justify-center">
          <p class="text-sm text-gray-500">
            ¿Eres nuevo aqui?
            <a class="no-underline text-c_primary" href="">Crea una cuenta</a>
          </p>
        </div>

      </form>
</template>