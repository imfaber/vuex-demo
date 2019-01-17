<template>
  <div class="child-component">
    <h2>{{title}}</h2>
    <p>
      <strong>{{name}},</strong> the counter value is <strong>{{counter}}</strong>
    </p>
    <form>
      <button type="button" @click="decrement">Decrement</button>
      <button type="button" @click="increment">Increment</button>
    </form>

    <GrandchildComponent :title="grandchildTitle" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import GrandchildComponent from "./GrandchildComponent.vue";

export default {
    props: {
        title: String
    },
    methods: {
        increment() {
            this.$store.commit("counter/increment");
        },
        decrement() {
            this.$store.commit("counter/decrement");
        }
    },
    computed: {
        ...mapState({
          counter: state => state.counter.counter, 
          name: state => state.user.name
        }),
        grandchildTitle() {
          return `${this.title}'s grandchild`
        }
    },
    components: {
        GrandchildComponent
    }
};
</script>

<style scoped>
.child-component {
    border: 3px solid rgb(0, 68, 255);
}

h2 {
    color: rgb(0, 68, 255);
}

form {
    display: flex;
    justify-content: center;
}

button {
    margin: 5px;
}
</style>
