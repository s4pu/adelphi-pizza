<template>
    <div class="buttons-container">
        <div class="back-button">
            <router-link class="button" to="/dough"> Go Back </router-link>
        </div>
        <div class="next-button">
            <router-link
                v-if="getToppings !== '-'"
                class="button back-button"
                to="/"
            >
                Next Step
            </router-link>
            <button v-else class="button next-button" disabled>
                Next Step
            </button>
        </div>
    </div>

    <p class="subtitle">Pick your <strong>toppings</strong>!</p>

    <div
        v-for="topping in [
            'salami',
            'cheese',
            'extra cheese',
            'extra extra cheese',
            'garlic',
            'paprika',
            'rocket',
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
    methods: {
        toggleTopping: function (e, topping) {
            e.stopPropagation();
            this.$store.commit("toggleTopping", topping);
        },
    },
    computed: {
        ...mapGetters(["getToppings"]),
    },
};
</script>
