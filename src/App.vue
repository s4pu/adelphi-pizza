<!-- <script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script> -->

<template>
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>adelphi pizza</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
            />
        </head>
        <body @click="closeDropdown">
            <section class="section">
                <div class="container">
                    <h1 class="title">adelphi pizza</h1>
                </div>
            </section>

            <!-- <p>
                <router-link to="/dough">Dough</router-link>
            </p> -->
            <section>
                <div class="container">
                    <router-view />
                </div>
            </section>

            <section>
                <div class="container">
                    <pizza-display />
                </div>
            </section>
        </body>
    </html>
</template>

<script>
// import PizzaTypeSelection from "./components/PizzaTypeSelection.vue";
// import DoughTypeSelection from "./components/DoughTypeSelection.vue";
// import ToppingsSelection from "./components/ToppingsSelection.vue";
import PizzaDisplay from "./components/PizzaDisplay.vue";

export default {
    components: {
        // PizzaTypeSelection,
        // DoughTypeSelection,
        // ToppingsSelection,
        PizzaDisplay,
    },
};
</script>
