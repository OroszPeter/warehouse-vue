<template>
    <h1 class="mb-3">Orders</h1>
    <div v-if="loading" class="alert alert-info">Loading orders. . . </div>
    <table v-else class="table table-striped table hover">
        <thead class="table-dark">
            <tr>
                <th>Order Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Order date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in orders" :key="item.orderId">
                <td>{{ item.orderId }}</td>
                <td>{{ item.product.name }}</td>
                <td>{{ item.quantity }}</td>
                <td v-if="item.status === 'Pending'"><span class="bg-warning badge">{{ item.status }}</span></td>
                <td v-if="item.status === 'Shipped'"><span class="bg-success badge">{{ item.status }}</span></td>
                <td>{{ new Date(item.orderDate).toLocaleString() }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {onMounted, computed, ref} from 'vue';
    import useOrdersStore from '../stores';

    export default {
        name: "OrdersPage",
        
        setup() {
            const store = useOrdersStore();
            const loading = ref(true);

            onMounted(async () =>{
                await store.fetchOrders();
                loading.value = false;
            });
            return {
            orders: computed(() => store.orders),
            loading
        }
    }
}
    
</script>