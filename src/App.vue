<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {Footer, Header},
}
</script>

<template>
    <div class="wrapper">
        <Header />
        <div class="wrapper-content">
            <div class="container">
                <!-- router-view подключает все страницы -->
                <router-view/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss"></style>
