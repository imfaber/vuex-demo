<template>
  <div class="parent-component">
    <h1>Hello {{fullName}}</h1>
    <p>The counter value is <strong>{{counter}}</strong></p>
    <div class="children">
      <ChildComponent title="Child A" />
      <ChildComponent title="Child B" />
      <ChildComponent title="Child C" />
    </div>
    <div>
      <button type="button" @click="changeUser">Random user</button>
    </div>
    <div>
      <label>Set counter: </label>
      <input type="number" v-model="localCounter" />
    </div>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import { mapState, mapGetters } from "vuex";

export default {
    data() {
        return {
            users: [
                {
                    name: "Linus",
                    surname: "Gates"
                },
                {
                    name: "Bill",
                    surname: "Jobs"
                },
                {
                    name: "Steve",
                    surname: "Torvalds"
                }
            ]
        };
    },
    computed: {
        ...mapState(["counter"]),
        ...mapGetters(["fullName"]),
        localCounter: {
            get() {
                return this.counter;
            },
            set(value) {
                this.$store.commit("setCounter", value);
            }
        }
    },
    methods: {
        changeUser() {
            this.$store.commit(
                "setUser",
                this.users[Math.floor(Math.random() * 3)]
            );
        }
    },
    components: {
        ChildComponent
    }
};
</script>

<style scoped>
.parent-component {
    border: 10px solid green;
    min-height: calc(100vh - 20px);
}

h1 {
    color: green;
}

.child-component {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    flex: 1 0 auto;
}

.children {
    display: flex;
    justify-content: center;
}
</style>
