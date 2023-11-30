<template>
    <div class="w-screen h-screen bg-c_background text-white">
        <NavBar />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavBar  from '@/components/profile/NavBar.vue'

export default defineComponent({
    name: 'ProfileView',
    components: {
        NavBar
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>