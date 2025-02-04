import { createRouter, createMemoryHistory } from "vue-router";

import OrdersPage from '../components/OrdersPage.vue';
import ProductsPage from '../components/ProductsPage.vue';
import StockPage from '../components/StockPage.vue';
import SuppliersPage from '../components/SuppliersPage.vue';

var routes = [
    {path: '/', component: OrdersPage},
    {path: '/products', component: ProductsPage},
    {path: '/stock', component: StockPage},
    {path: '/suppliers', component: SuppliersPage}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router