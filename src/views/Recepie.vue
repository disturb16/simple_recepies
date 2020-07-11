<template>
  <div>
    <div class="container text-left">
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>

    <div class="container">
      <h1>{{ recepieSelected.title }}</h1>
      <br />
      <p>{{ recepieSelected.content }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const db = firebase.firestore();

export default {
  name: "RecepieDetails",
  props: ["id"],

  data() {
    return {
      recepieSelected: {},
    };
  },

  created() {
    this.getRecepie();
  },

  methods: {
    async getRecepie() {
      try {
        const t = new Date();
        const result = await db.doc(`recepies/${this.id}`).get();
        this.recepieSelected = result.data();
        // db.doc(`recepies/${this.id}`).update({
        //   modified: t.toLocaleTimeString(),
        // });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
