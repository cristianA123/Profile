<template>
    <div class="container mx-auto flex items-center justify-center p-4 flex-col" id="service">
        <h1 class="text-5xl font-bold my-16">Lo que hago por mis clientes</h1>
        <div class="grid grid-cols-3 gap-5 px-40">
            <div 
                v-for="service in services" :key="service.title" 
                class="px-16 pt-9 pb-6 flex justify-center items-center flex-col bg-c_secondary rounded-2xl hover:bg-c_secondary_hover"
            >
                <i :class="`${service.icon} text-6xl mb-7 text-c_primary hover:text-white`"></i>
                <h4 class="text-xl font-bold mb-4">{{ service.title }}</h4>
                <ul class="text-gray-500 list-disc">
                    <li class="text-sm" v-for="content in service.contents" :key="content">{{ content }}</li>
                </ul>
            </div>   
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        
        const services = [
            {
                title: 'Desarrollo Front-end',
                icon: 'fa-brands fa-node-js',
                contents : [
                    'Implementación de diseños utilizando tecnologías como HTML, CSS y JavaScript.',
                    'Integración de bibliotecas y frameworks front-end como React, Angular o Vue.js.'
                ]
            },
            {
                title: 'Desarrollo Back-end',
                icon: 'fa-brands fa-node',
                contents : [
                    'Desarrollo de APIs (Interfaces de Programación de Aplicaciones).',
                    'Implementación de la lógica de negocios y procesamiento de datos en el servidor.',
                ]
            },
            {
                title: 'Gestión de Bases de Datos',
                icon: 'fa-solid fa-database',
                contents : [
                    'Diseño y creación de esquemas de bases de datos.',
                    'Uso de tecnologías de bases de datos como MySQL, PostgreSQL, MongoDB, etc.'
                ]
            },
            {
                title: 'Seguridad',
                icon: 'fa-solid fa-shield',
                contents : [
                    'Protección contra vulnerabilidades comunes.',
                    'Validación y sanitización de datos para prevenir ataques.'
                ]
            },
            {
                title: 'Mantenimiento y Actualizaciones:',
                icon: 'fa-solid fa-wrench',
                contents : [
                    'Actualización de tecnologías y bibliotecas.',
                    'Mejora continua de la aplicación en términos de funcionalidad y rendimiento.'
                ]
            },
            {
                title: 'Colaboración y Despliegue',
                icon: 'fa-solid fa-cloud-arrow-up',
                contents : [
                    'Trabajo en equipo con otros desarrolladores y profesionales de TI.',
                    'Despliegue y configuración de aplicaciones en servidores.'
                ]
            }
        ]

        return {
            services
        }
    }
})
</script>

<style scoped>

</style>