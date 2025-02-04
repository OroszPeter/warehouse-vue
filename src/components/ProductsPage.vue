<template>
    <h1 class="mb-3">Products</h1>
    <div v-if="loading" class="alert alert-info">Loading products. . . </div>
    <table v-else class="table table-striped table hover">
        <thead class="table-dark">
            <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.productId">
                <td>{{ item.productId }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {onMounted, computed, ref} from 'vue';
    import useOrdersStore from '../stores';

    export default {
        name: "ProductsPage",
        
        setup() {
            const store = useOrdersStore();
            const loading = ref(true);

            onMounted(async () =>{
                await store.fetchProducts();
                loading.value = false;
            });
            return {
            products: computed(() => store.products),
            loading
        }
    }
}
    
</script>