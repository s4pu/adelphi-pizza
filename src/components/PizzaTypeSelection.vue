<template>
    <router-link class="button" to="/"> Go Back </router-link>
    <router-link v-if="getPizzaStyle !== '-'" class="button" to="/dough">
        Next Step
    </router-link>
    <button v-else class="button" disabled>Next Step</button>

    <p class="subtitle">
        What kind of <strong>pizza style</strong> do you want?
    </p>

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
                <span>Pizza Style</span>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
    methods: {
        toggleDropdown: function (e, id = "style-dropdown") {
            let dropdown = document.querySelector("#" + id);
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
    },
    computed: {
        ...mapGetters(["getPizzaStyle"]),
    },
};
</script>
