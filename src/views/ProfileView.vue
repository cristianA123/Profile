<template>
    <div class=" bg-c_background text-white p-6">
        <NavBar />
        <HomeComponent />
        <AboutView />
        <!-- <SkilsView /> -->
        <PortfolioView />
        <ServiceView />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavBar  from '@/components/profile/NavBar.vue'
import  HomeComponent  from '@/components/profile/HomeComponent.vue'
import  AboutView  from '@/components/profile/AboutView.vue'
// import  SkilsView  from '@/components/profile/SkilsView.vue'
import  ServiceView  from '@/components/profile/ServiceView.vue'
import  PortfolioView  from '@/components/profile/PortfolioView.vue'

export default defineComponent({
    name: 'ProfileView',
    components: {
        NavBar,
        HomeComponent,
        AboutView,
        // SkilsView,
        ServiceView,
        PortfolioView,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>