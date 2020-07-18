<template>
  <div>
    <div class="container text-left">
      <router-link to="/" class="btn btn-primary">Back</router-link>
    </div>

    <div class="container">
      <h1>{{ recepieSelected.title }}</h1>
      <br />

      <img src id="image" width="70%" />
      <br />
      <br />

      <p>{{ recepieSelected.content }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const db = firebase.firestore();
const storage = firebase.storage().ref();

export default {
  name: "RecepieDetails",
  props: ["id"],

  data() {
    return {
      recepieSelected: {}
    };
  },

  created() {
    this.getRecepie();
  },

  mounted() {
    this.getImage(this.id);
  },

  methods: {
    async getRecepie() {
      try {
        const t = new Date();
        const result = await db.doc(`recepies/${this.id}`).get();
        this.recepieSelected = result.data();
      } catch (error) {
        console.log(error);
      }
    },

    async getImage(id) {
      try {
        const url = await storage.child(`images/${id}.jpg`).getDownloadURL();

        const image = document.getElementById("image");
        image.src = url;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
