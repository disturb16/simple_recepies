<template>
  <div class="main-content">
    <div class="container text-left col col-lg-4 form-container">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="authenticate"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";

export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async authenticate() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        // redirigir a la pagina principal.
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
