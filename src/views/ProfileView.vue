<template>
    <div class="w-screen h-screen bg-c_background text-white p-6">
        <NavBar />
        <HomeComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavBar  from '@/components/profile/NavBar.vue'
import  HomeComponent  from '@/components/profile/HomeComponent.vue'

export default defineComponent({
    name: 'ProfileView',
    components: {
        NavBar,
        HomeComponent
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>