<template>
  <div class="container">
    <h1><span>Add</span> new card</h1>
    <p>New card</p>
    <CardForm />
  </div>
</template>

<script>
import CardForm from "../components/CardForm.vue";

export default { components: { CardForm } };
</script>

<style scoped>
h1 {
  font-family: "Roboto", sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: rgb(82, 80, 80);
  margin: 20px 0 40px 0;
}
h1 span {
  font-family: "Roboto", sans-serif;
  color: #00ce89;
}
p {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  color: rgb(70, 69, 69);
}
.container {
  max-width: 500px;
  margin: 0 auto;
}
</style>