<template>
    <div class="container mx-auto flex items-center justify-center p-4" id="about">
        <div>
            <h1 class="font-bold text-5xl text-center my-16">Programando con pasión.</h1>
            <div class="flex gap-8 items-center justify-center">
                <div class="p-4">
                    <figure class="flex justify-center items-center">
                        <img src="./../../assets/setUp.jpg" alt="SetUP">
                    </figure>
                    <div class="flex justify-center items-center">
                        <div class="w-30 flex justify-center items-center border-l-8 border-c_primary">
                            <p class="text-8xl font-bold mr-2">12</p>
                            <p class="text-2xl font-bold w-8">Años Exitosos</p>
                        </div>
                    </div>
                </div>
                <div class=" flex-1 p-4">
                    <h2 class="font-bold text-2xl mb-4">Mi Biografía</h2>
                    <p class="text-gray-500 text-justify">Soy Ingeniero en Sistemas que me he dedicado al desarrollo de software desde hace más de 5 años en el campo laboral. He trabajado con tecnologías como React, Vue, Node, Nest y Laravel para realizar mis proyectos. Me considero una persona muy sociable y disfruto escuchar y ser escuchado por los demás. Siempre estoy en constante aprendizaje y actualmente explorando el mundo de la nube y su automatización para implementar aplicaciones de manera más eficiente.</p>
                    <div class="border-2 border-gray-700 rounded-lg flex mt-8 mb-6">
                        <div class="p-7 flex-1">
                            <div>
                                <h3 class="font-bold">Nombre</h3>
                                <p class="text-gray-400">Cristian Alexis Chipana Huaman</p>
                            </div>
                            <div>
                                <h3 class="font-bold">Email</h3>
                                <p class="text-gray-400">cristianchipan2@gmail.com</p>
                            </div>
                            <div>
                                <h3 class="font-bold">Phone</h3>
                                <p class="text-gray-400">+51 935216950</p>
                            </div>
                        </div>
                        <div class="p-7 border-l-2 border-gray-700 flex-1">
                            <div>
                                <h3 class="font-bold">Freelance</h3>
                                <p class="text-gray-400">Disponible</p>
                            </div>
                            <div>
                                <h3 class="font-bold">Dirrecion</h3>
                                <p class="text-gray-400">200 millas, Villa el salvador</p>
                            </div>
                            <div>
                                <h3 class="font-bold">Dob</h3>
                                <p class="text-gray-400">Enero 10, 1998</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-c_primary font-bold text-2xl inline-block px-6 py-3 rounded-2xl">
                        Descargar CV
                    </div>
                </div>
            </div>
        </div>
    </div>
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