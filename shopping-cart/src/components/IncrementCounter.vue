<template>
    <button class="button" @click="this.$store.commit('increment', 10)">
        Increment +10
    </button>
    <button class="button" @click="this.$store.commit('increment', -5)">
        Decrease -5
    </button>
</template>

<!-- <script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script> -->
