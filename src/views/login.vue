<template>
  <div class="main-content">
    <div class="container text-left col col-lg-4 form-container">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin"
};
</script>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>