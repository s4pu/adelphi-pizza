<template>
    <div class="buttons-container">
        <div class="back-button">
            <router-link class="button" to="/style"> Go Back </router-link>
        </div>
        <div class="next-button">
            <router-link
                v-if="getDoughType !== '-'"
                class="button back-button"
                to="/toppings"
            >
                Next Step
            </router-link>
            <button v-else class="button next-button" disabled>
                Next Step
            </button>
        </div>
    </div>

    <p class="subtitle">What should be the type of <strong>dough</strong>?</p>

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
                    v-for="item in ['Standard', 'Wholegrain', 'Sour Dough']"
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
        chooseDoughType: function (e, doughType) {
            e.stopPropagation();
            this.$store.commit("chooseDoughType", doughType);
        },
    },
    computed: {
        ...mapGetters(["getDoughType"]),
    },
};
</script>
