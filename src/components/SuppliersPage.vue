<template>
<h1 class="mb-3">Suppliers</h1>
<div v-if="loading" class="alert alert-info">Loading suppliers . . .</div>
<table v-else class="table table-striped table-hover">
    <thead class="table-dark">
        <tr>
            <th>Supplier Id</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="supplier in suppliers" :key="suppliers.supplierId">
            <td >{{ supplier.supplierId }}</td>
            <td >{{ supplier.name }}</td>
            <td >{{ supplier.contactInfo }}</td>
            <td >{{ supplier.country }}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
    import {onMounted, computed, ref} from 'vue';
    import useOrdersStore from '../stores';

    export default {
        name: "SuppliersPage",
        
        setup() {
            const store = useOrdersStore();
            const loading = ref(true);

            onMounted(async () =>{
                await store.fetchSuppliers();
                loading.value = false;
            });
            return {
            suppliers: computed(() => store.suppliers),
            loading
        }
    }
}
    
</script>