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
        <body @click="closeDropdown" class="page">
            <section class="section">
                <div class="container">
                    <h1 class="title">adelphi pizza</h1>
                </div>
            </section>

            <section class="selection-container">
                <div class="container">
                    <router-view />
                </div>
            </section>

            <section class="pizza-container">
                <div class="container">
                    <pizza-display />
                </div>
            </section>
        </body>
    </html>
</template>

<script>
import PizzaDisplay from "./components/PizzaDisplay.vue";

export default {
    components: {
        PizzaDisplay,
    },
};
</script>

<style>
.selection-container {
    min-height: 300px;
}

.pizza-container {
    margin-top: 1cm;
}

h1 {
    text-align: center;
}

.buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1cm;
}

.page {
    padding-left: 10%;
    padding-right: 10%;
    max-width: 20cm;
    margin-left: auto;
    margin-right: auto;
}
</style>
