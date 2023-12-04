<template>
    <div class="container mx-auto flex items-center justify-center p-4 flex-col" id="proyects">
        <h1 class="text-5xl font-bold my-16">Proyectos</h1>
        <div class="grid grid-cols-4 gap-10 mb-10">
            <div 
              v-for="proyect in proyects"
              :key="proyect.title"
              class="bg-c_secondary p-8 rounded-2xl"
            >
                <div class="flex justify-center ">
                  <div class="absolute">
                    <div :class="`${ proyect.iconColor || 'bg_custom_orange'} inline-block p-2 rounded-xl  relative -top-12`">
                      <i :class="`${proyect.icon} text-4xl`"></i>
                    </div>
                  </div>
                </div>
                <h4 class="text-xl font-bold mt-6 text-center mb-4">{{ proyect.title }}</h4>
                <p class="text-gray-500 text-sm text-justify mb-4">{{ proyect.description }}</p>
                <div class="flex justify-center">
                  <a :href="proyect.link" class="font-bold text-lg text-c_primary cursor-pointer" target="_blank">Open</a>
                </div>
                <div class="border-4 rounded-full border-c_primary flex-1 my-4"></div>
                <div class="flex justify-center items-center gap-2 mt-2">
                    <figure v-for="img in proyect.imgs" :key="img" class="bg-white w-10 h-10 p-1.5 rounded-full flex justify-center items-center">
                      <img :src="require(`@/assets/${img}`)" alt="tech"/>
                    </figure>
                </div>
            </div>
        </div>
        
        <div class="">
          <p class="text-c_primary text-lg font-semibold mb-4">
            Ver más proyectos <a class="font-bold hover:underline text-blue-500" href="https://github.com/cristianA123" target="_blank">Ir a GitHub</a>
          </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        
        const proyects = [
          {
            icon: 'fa-solid fa-cloud-arrow-up',
            iconColor: 'bg_custom_orange',
            title: 'App EnvíaTodo ',
            description: 'Plataforma para simplificar el envío de mensajes a través de canales variados, como correo electrónico, mensajes de texto (SMS) y WhatsApp',
            link: 'https://app.enviamas.pe/auth/signin',
            imgs: [
              'Vue.png',
              'node.jpg'
            ]
          },
          {
            icon: 'fa-solid fa-memory',
            iconColor: 'bg_custom_celeste',
            title: 'App Teca ',
            description: 'Sistema destinado a administrar, supervisar, activar y manejar dispositivos de Internet de las cosas (IoT).',
            link: 'https://teca.pe',
            imgs: [
              'React.png',
              'node.jpg'
            ]
          },
          {
            icon: 'fa-solid fa-memory',
            iconColor: 'bg_custom_green',
            title: 'App Puertas',
            description: 'Plataforma para la administración y supervisión de proyectos.',
            link: 'https://app.expertosenpuertas.com/login',
            imgs: [
              'Vue.png',
              'node.jpg',
              'laravel.png'
            ]
          },
          {
            icon: 'fa-solid fa-memory',
            iconColor: 'bg_custom_pink',
            title: 'App Diario ',
            description: 'plicación diseñada para organizar y supervisar eficientemente proyectos.',
            link: 'https://r-tu-diario.netlify.app/auth/login',
            imgs: [
              'React.png',
              'node.jpg'
            ]
          },
          {
            icon: 'fa-solid fa-memory',
            iconColor: 'bg_custom_azul',
            title: 'App Diario ',
            description: 'plicación diseñada para organizar y supervisar eficientemente proyectos.',
            link: 'https://r-tu-diario.netlify.app/auth/login',
            imgs: [
              'React.png',
              'node.jpg'
            ]
          },
        ]

        return {
          proyects
        }
    }
})
</script>

<style scoped>

.bg_custom_orange {
  background-color: #da9b65; 
}

.bg_custom_green {
  background-color: #23cc63; 
}

.bg_custom_rosado {
  background-color: #dc6465; 
}

.bg_custom_celeste {
  background-color: #63a9dc; 
}

.bg_custom_azul {
  background-color: #2336cb; 
}

.bg_custom_pink {
  background-color: #c364da; 
}

</style>