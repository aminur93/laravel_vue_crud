<template>
    <div>
        <router-view></router-view>

        <FlashMessage :position="'right bottom'"></FlashMessage>
    </div>
</template>

<script>

    import * as authServices from './services/auth_services';

    export default {
        name: "app",
        beforeCreate: async function(){
            try {
                if (authServices.isLoogedIn())
                {
                    const response = await authServices.getProfile();
                    this.$store.dispatch('authenticate', response.data);
                }
            }catch(error){
                authServices.logout();
            }
        }
    }
</script>

<style scoped>

</style>