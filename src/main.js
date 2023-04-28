import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.css";

const store = createStore({
    state() {
        return {
            pizzaStyle: "foo",
            doughType: "bar",
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
    },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
