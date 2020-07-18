<template>
  <div class="container">
    <div class="container text-left">
      <a href="#" class="btn btn-primary" @click.prevent="logOut">Cerrar sesión</a>
      <router-link to="/new-recepie" class="btn btn-primary">Agregar Receta</router-link>
    </div>
    <div class="greet">
      <h1>Instant Meal</h1>
    </div>

    <div v-for="recepie in recepies" :key="recepie.id" class="recepie-container">
      <recepie-card
        :id="recepie.id"
        :title="recepie.title"
        :description="recepie.description"
        :category="recepie.category"
      />
    </div>
  </div>
</template>

<script>
import cardRecepie from "@/components/RecepieCard.vue";
import firebase from "../common/firebase_setup";
const db = firebase.firestore();

export default {
  name: "Home",

  data() {
    return {
      recepies: []
    };
  },

  created() {
    this.getRecepies();
  },

  methods: {
    async logOut() {
      try {
        await firebase.auth().signOut();
        this.$router.push({ name: "UserSignin" });
      } catch (error) {
        console.log(error);
      }
    },

    async getRecepies() {
      try {
        // Obtener la lista de documentos.
        const result = await db
          .collection("recepies")
          .where("category", "==", "cocina italiana")
          .get();

        // Reiniciar arreglo de recetas.
        this.recepies = [];

        // Recorrer la lista para agregar la data
        // al arreglo local de recetas.
        result.forEach(doc => {
          const r = doc.data();
          r.id = doc.id;

          this.recepies.push(r);
        });
      } catch (error) {
        console.log(error);
      }
    }
  },

  components: {
    "recepie-card": cardRecepie
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fondamento&display=swap");

.greet h1 {
  font-family: "Fondamento", cursive;
  font-size: 5em;
}

.recepie-container {
  margin-bottom: 1em;
}
</style>
