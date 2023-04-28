import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./../node_modules/bulma/css/bulma.css";

const store = createStore({
    state() {
        return { counter: 0 };
    },
    mutations: {
        increment(state, payload) {
            if ((state.counter < 70) & (payload > 0)) {
                state.counter = state.counter + payload;
            }
            if ((state.counter > -50) & (payload < 0)) {
                state.counter = state.counter + payload;
            }
        },
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        getNormalizedCounter(state, getter) {
            if (getter.getCounter >= 50) {
                return 50;
            }
            return getter.getCounter;
        },
    },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
