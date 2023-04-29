import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import Home from "./components/HomeView.vue";
import PizzaTypeSelection from "./components/PizzaTypeSelection.vue";
import DoughTypeSelection from "./components/DoughTypeSelection.vue";
import ToppingsSelection from "./components/ToppingsSelection.vue";
import "./../node_modules/bulma/css/bulma.css";
import { createRouter, createWebHashHistory } from "vue-router";

const store = createStore({
    state() {
        return {
            pizzaStyle: "-",
            doughType: "-",
            toppings: [],
        };
    },
    mutations: {
        choosePizzaStyle(state, payload) {
            state.pizzaStyle = payload;
        },
        chooseDoughType(state, payload) {
            state.doughType = payload;
        },
        chooseToppings(state, payload) {
            state.toppings = payload;
        },
        toggleTopping(state, payload) {
            let index = state.toppings.indexOf(payload);
            if (index > -1) {
                state.toppings.splice(index, 1);
            } else {
                state.toppings = [...state.toppings, payload];
            }
        },
    },
    getters: {
        getPizza(state) {
            return (
                state.pizzaStyle +
                " pizza with " +
                state.doughType +
                " dough and the following toppings: " +
                state.toppings
            );
        },
        getPizzaStyle(state) {
            return state.pizzaStyle;
        },
        getDoughType(state) {
            return state.doughType;
        },
        getToppings(state) {
            if (state.toppings.length > 0) {
                return state.toppings.join(", ");
            } else {
                return "no toppings";
            }
        },
    },
});

const routes = [
    { path: "/", component: Home },
    { path: "/style", component: PizzaTypeSelection },
    { path: "/dough", component: DoughTypeSelection },
    { path: "/toppings", component: ToppingsSelection },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
