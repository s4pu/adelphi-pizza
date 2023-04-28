<template>
    <p>Counter: {{ getCounter }}</p>
    <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
    <increment-counter />
</template>

<script>
import { mapGetters } from "vuex";
import IncrementCounter from "./components/IncrementCounter.vue";

export default {
    components: { IncrementCounter },
    computed: {
        // trackCounter() {
        //     return this.$store.getters.getCounter;
        // },
        ...mapGetters(["getCounter"]),
    },
};
</script>
