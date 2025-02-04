import { defineStore } from "pinia";
import axios from "axios";

export const useOrdersStore = defineStore("orders", {
   state: () => ({
       orders: [],
       products: [],
       stock: [],
       suppliers: []
   }), 

   actions: {
    async fetchOrders() {
        const response = await axios.get('https://localhost:7044/api/Orders');
        this.orders = response.data;
    },

    async fetchProducts() {
        const response = await axios.get('https://localhost:7044/api/Products');
        this.products = response.data;  
    },

    async fetchStock() {
        const response = await axios.get('https://localhost:7044/api/Stock');
        this.stock = response.data;  
    },

    async fetchSuppliers() {
        const response = await axios.get('https://localhost:7044/api/Suppliers');
        this.suppliers = response.data; 
        console.log(response);
         
    }
   }
});
export default useOrdersStore;
