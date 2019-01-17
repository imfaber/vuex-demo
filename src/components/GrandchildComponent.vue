<template>
  <div class="grand-child-component">
    <h3>{{title}}</h3>
    <p>
      <strong>{{name}},</strong> the counter value is <strong>{{counter}}</strong>
    </p>
    <form>
      <button type="button" @click="decrement">Decrement</button>
      <button type="button" @click="increment">Increment</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: {
        title: String
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        },
        decrement() {
            this.$store.commit("decrement");
        }
    },
    computed: {
        ...mapState(["counter", "name"])
    }
};
</script>

<style scoped>
.grand-child-component {
    border: 3px solid rgb(255, 174, 0);
    margin-top: 20px;
    padding: 10px;
}

h3 {
    color: rgb(255, 174, 0);
}
</style>
