<template>
  <div class="home">
  <div class="container">
    <h1><span>E-</span>wallet</h1>
    <Card :cards="cards" />
    <CardStack />
    <div>
      <button @click="changePage">Add card</button>
      <button @click='deleteCard' class="delete">Remove card</button>
    </div>
  </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";

export default {
  components: { Card, CardStack },

  data() {
    return {
      cards: [
        {
          holder: "Leon Wass Vallin",
          vendor: "Nordea",
          number: "1235 5678 9101 1123",
          validMonth: "12",
          validYear: "5",
        },
      ],
    };
  },
  methods: {
    changePage() {
      this.$router.push({ name: "AddCard" });
    },
    deleteCard() {
      
    }
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
button {
  margin: 20px 5px;
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