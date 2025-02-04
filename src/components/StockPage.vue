<template>
    <h1 class="mb-3">Stock</h1>
    <div v-if="loading" class="alert alert-info">Loading stock. . . </div>
    <table v-else class="table table-striped table hover">
        <thead class="table-dark">
            <tr>
                <th>Stock Id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in stock" :key="item.stockId">
                <td>{{ item.stockId }}</td>
                <td>{{ item.product.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.location }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {onMounted, computed, ref} from 'vue';
    import useOrdersStore from '../stores';

    export default {
        name: "StockPage",
        
        setup() {
            const store = useOrdersStore();
            const loading = ref(true);

            onMounted(async () =>{
                await store.fetchStock();
                loading.value = false;
            });
            return {
            stock: computed(() => store.stock),
            loading
        }
    }
}
    
</script>