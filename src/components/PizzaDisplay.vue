<template>
    <p>Current selection:</p>
    <p>
        <b>{{ getPizzaStyle }}</b> pizza with
    </p>
    <p>
        <b>{{ getDoughType }}</b> dough and the following toppings:
    </p>
    <p>
        <b>{{ getToppings }}</b>
    </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["getPizzaStyle", "getDoughType", "getToppings"]),
    },
};
</script>
