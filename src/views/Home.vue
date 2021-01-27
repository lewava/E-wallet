<template>
  <div class="container">
    <h1><span>E-</span>wallet</h1>
    <p>Active card</p>
    <Card :card="card"/>
    <div>
      <button @click="changePage">Add card</button>
      <button @click="deleteCard" class="delete">Remove card</button>
    </div>
    <CardStack @sendData="getData" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";

export default {
  components: { Card, CardStack },

  data() {
    return {
      card: this.$root.$data.cards[0]
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
      const oldActiveCard = this.card
      const newActiveCard = this.$root.$data.cards[data]
      this.$root.$data.cards.splice(data, 1)
      this.$root.$data.cards.push(oldActiveCard)
      this.card = newActiveCard
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
h1 {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: rgb(82, 80, 80);
}
span {
  color: #00ce89;
}
p {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  color: rgb(70, 69, 69);
}
button {
  margin: 50px 5px;
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
</style>