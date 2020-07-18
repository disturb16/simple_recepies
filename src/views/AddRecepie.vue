<template>
  <div>
    <div class="container text-left col col-lg-4 form-container">
      <div class="form-group">
        <label for="title">Titulo</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>

      <div class="form-group">
        <label for="description">Descripcion</label>
        <input type="text" class="form-control" id="description" v-model="description" />
      </div>

      <div class="form-group">
        <label for="category">Categoria</label>
        <input type="text" class="form-control" id="category" v-model="category" />
      </div>

      <div class="form-group">
        <label for="content">Contenido</label>
        <input type="text" class="form-control" id="content" v-model="content" />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary" @click.prevent="addRecepie">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../common/firebase_setup";
const db = firebase.firestore();

export default {
  data() {
    return {
      title: "",
      description: "",
      category: "",
      content: ""
    };
  },

  methods: {
    async addRecepie() {
      try {
        const recepie = {
          title: this.title,
          description: this.description,
          category: this.category,
          content: this.content,
          userId: firebase.auth().currentUser.uid
        };

        await db.collection("recepies").add(recepie);
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>