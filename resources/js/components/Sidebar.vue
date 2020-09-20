<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <router-link to="/home" class="nav-link" exact>
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </router-link>
                    <div class="sb-sidenav-menu-heading">Interface</div>
    
                    <router-link v-if="$store.state.profile.role == 'admin'" to="/home/category" class="nav-link" exact>
                        <div class="sb-nav-link-icon"><i class="fas fa-list"></i></div>
                        Category
                    </router-link>

                    <router-link v-if="$store.state.profile.role == 'admin'" to="/home/brand" class="nav-link" exact>
                        <div class="sb-nav-link-icon"><i class="fas fa-magic"></i></div>
                        Brand
                    </router-link>

                    <router-link v-if="$store.state.profile.role == 'admin'" to="/home/products" class="nav-link" exact>
                        <div class="sb-nav-link-icon"><i class="fas fa-store"></i></div>
                        Products
                    </router-link>
                    
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped>

</style>