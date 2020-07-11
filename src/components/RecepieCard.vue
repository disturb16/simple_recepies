<template>
  <div class="card text-left">
    <div class="card-header">{{ category }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <router-link :to="/recepies/ + id" class="btn btn-primary"
        >Ver Receta</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RecepieCard",
  props: ["title", "category", "description", "id"],
};
</script>
