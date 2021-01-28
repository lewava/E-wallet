<template>
  <div class="container">
    <Top :text="text" />
    <Card :card="card" />
    <CardForm @getCard="updateCard" />
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardForm from "../components/CardForm.vue";

export default {
  components: { Top, Card, CardForm },
  data() {
    return {
      text: ["Add ", "new card", "New Card"],
      card: {
        holder: "",
        vendor: "",
        number: "",
        month: "MM",
        year: "YY",
      },
    };
  },
  methods: {
    updateCard(card) {
      this.card = card;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
}
</style>