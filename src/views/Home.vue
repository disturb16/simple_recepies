<template>
  <div class="container">
    <div class="greet">
      <h1>Instant Meal</h1>
    </div>

    <div
      v-for="recepie in recepies"
      :key="recepie.id"
      class="recepie-container"
    >
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
import recepiesList from "@/assets/recepies.json";

export default {
  name: "Home",

  data() {
    return {
      recepies: recepiesList,
    };
  },

  components: {
    "recepie-card": cardRecepie,
  },
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
