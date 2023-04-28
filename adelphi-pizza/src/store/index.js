import { createStore } from "vuex";
import product from "./modules/product";
import cart from "./modules/cart";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        product,
        cart,
    },
});
