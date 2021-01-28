<template>
  <div class="container">
    <Top :text="text" />
    <Card :card="card" />
    <CardStack @sendData="getData" />
    <div class="button-container">
      <button @click="changePage">Add card</button>
      <button @click="deleteCard" class="delete">Remove card</button>
    </div>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";

export default {
  components: { Card, CardStack, Top },

  data() {
    return {
      card: this.$root.$data.cards[0],
      text: ["E-", "wallet", "Active card"],
    };
  },
  methods: {
    changePage() {
      this.$router.push({ name: "AddCard" });
    },
    deleteCard() {
      this.$root.$data.cards.shift();
      this.card = this.$root.$data.cards[0];
    },
    getData(data) {
      const oldActiveCard = this.card;
      const newActiveCard = this.$root.$data.cards[data];
      this.$root.$data.cards.splice(data, 1);
      this.$root.$data.cards.push(oldActiveCard);
      this.card = newActiveCard;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}
button {
  margin: 10px 5px;
  background: #00ce89;
  color: white;
  padding: 15px 0;
  width: 195px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}
button.delete {
  background: #dc143c;
}
.button-container {
  display: flex;
}
</style>