<template>
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Hello Bulma!</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
            />
        </head>
        <body>
            <section class="section">
                <div class="container">
                    <h1 class="title">Hello World</h1>
                    <p class="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>
                </div>
            </section>

            <section class="section">
                <div class="dropdown">
                    <div class="dropdown-trigger">
                        <button
                            class="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onclick='{
                              let dropdown = document.querySelector(".dropdown");
                              dropdown.classList.toggle("is-active");}'
                        >
                            <span>Pizza Type</span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item"> Italian </a>
                            <a class="dropdown-item"> American </a>
                        </div>
                    </div>
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

// const dropdowns = document.querySelectorAll(".dropdown:not(.is-hoverable)");

// eslint-disable-next-line no-unused-vars
const toggleDropdown = (e) => {
    let dropdown = document.querySelector(".dropdown");
    console.log("DROPDOWNNNN");
    e.stopPropagation();
    dropdown.classList.toggle("is-active");
};

// if (dropdowns.length > 0) {
//     // For each dropdown, add event handler to open on click.
//     dropdowns.forEach(function (el) {
//         el.addEventListener("click", function (e) {
//             console.log("DROPDOWNNNN");
//             e.stopPropagation();
//             el.classList.toggle("is-active");
//         });
//     });

//     // If user clicks outside dropdown, close it.
//     document.addEventListener("click", function () {
//         closeDropdowns();
//     });
// }

// /*
//  * Close dropdowns by removing `is-active` class.
//  */
// function closeDropdowns() {
//     dropdowns.forEach(function (el) {
//         el.classList.remove("is-active");
//     });
// }

// // Close dropdowns if ESC pressed
// document.addEventListener("keydown", function (event) {
//     let e = event || window.event;
//     if (e.key === "Esc" || e.key === "Escape") {
//         closeDropdowns();
//     }
// });

export default {
    // components: { IncrementCounter },
    computed: {
        ...mapGetters(["getPizza"]),
    },
};
</script>
