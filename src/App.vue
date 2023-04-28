<template>
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Hello Bulma!</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
            />
        </head>
        <body @click="closeDropdown">
            <section class="section">
                <div class="container">
                    <h1 class="title">Hello World</h1>
                    <p class="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                </div>
            </section>

            <section class="section">
                <div id="style-dropdown" class="dropdown">
                    <div class="dropdown-trigger">
                        <button
                            class="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            @click="
                                (e) => {
                                    toggleDropdown(e, 'style-dropdown');
                                }
                            "
                        >
                            <span>Pizza Type</span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a
                                v-for="item in ['Italian', 'American']"
                                :key="item"
                                class="dropdown-item"
                                @click="
                                    (e) => {
                                        choosePizzaType(e, item);
                                        closeDropdowns(e);
                                    }
                                "
                            >
                                {{ item }}
                            </a>
                        </div>
                    </div>
                </div>

                <div id="dough-dropdown" class="dropdown">
                    <div class="dropdown-trigger">
                        <button
                            class="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            @click="
                                (e) => {
                                    toggleDropdown(e, 'dough-dropdown');
                                }
                            "
                        >
                            <span>Dough Type</span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a
                                v-for="item in [
                                    'Standard',
                                    'Wholegrain',
                                    'Sour Dough',
                                ]"
                                :key="item"
                                class="dropdown-item"
                                @click="
                                    (e) => {
                                        chooseDoughType(e, item);
                                        closeDropdowns(e);
                                    }
                                "
                            >
                                {{ item }}
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    v-for="topping in [
                        'salami',
                        'cheese',
                        'extra cheese',
                        'garlic',
                        'paprika',
                    ]"
                    :key="topping"
                >
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            @click="
                                (e) => {
                                    toggleTopping(e, topping);
                                }
                            "
                        />
                        {{ topping }}
                    </label>
                </div>
            </section>

            <section class="section">
                <p>Pizza: {{ getPizza }}</p>
            </section>
        </body>
    </html>
</template>

<script>
import { mapGetters } from "vuex";
// import IncrementCounter from "./components/IncrementCounter.vue";

export default {
    // components: { IncrementCounter },
    methods: {
        toggleDropdown: function (e, id = "style-dropdown") {
            console.log(id);
            let dropdown = document.querySelector("#" + id);
            console.log(dropdown);
            dropdown.classList.toggle("is-active");
        },
        closeDropdowns: function (e) {
            let dropdowns = document.querySelectorAll(".dropdown");
            e.stopPropagation();
            dropdowns.forEach((dropdown) =>
                dropdown.classList.remove("is-active")
            );
        },
        choosePizzaType: function (e, pizzaType) {
            e.stopPropagation();
            this.$store.commit("choosePizzaStyle", pizzaType);
        },
        chooseDoughType: function (e, doughType) {
            e.stopPropagation();
            this.$store.commit("chooseDoughType", doughType);
        },
        toggleTopping: function (e, topping) {
            e.stopPropagation();
            this.$store.commit("toggleTopping", topping);
        },
    },
    computed: {
        ...mapGetters(["getPizza"]),
    },
};
</script>
