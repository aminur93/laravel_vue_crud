<template>
    <div>
        <spa-header></spa-header>

        <div id="layoutSidenav">
            <spa-sidebar></spa-sidebar>

            <div id="layoutSidenav_content">

                <router-view></router-view>

                <spa-footer></spa-footer>
            </div>
        </div>

        <FlashMessage :position="'right bottom'"></FlashMessage>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Sidebar from '../components/Sidebar.vue'
    import Footer from '../components/Footer.vue'
    export default{
        components: {
            "spa-header" : Header,
            "spa-sidebar" : Sidebar,
            "spa-footer" : Footer
        },
        created()
        {
            document.querySelector('body').style.backgroundColor = '#fff';
        },
    }
</script>

<style>

</style>