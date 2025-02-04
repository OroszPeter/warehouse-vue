<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a href="#" class="navbar-brand">Warehouse Manager</a>
                <button class="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggle-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><router-link class="nav-link" to="/">Orders</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/products">Products</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/stock">Stock</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/suppliers">Suppliers</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-4">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>

<style scoped>
.navbar-nav .nav-link{
    color: white !important;
}
</style>
