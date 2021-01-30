<template>
  <div class="container">
    <Top :text="text" />
    <Card :card="card" />
    <CardStack @sendData="getData" />
    <div class="button-container">
      <button @click="changePage">Add card</button>
      <button @click="toggleModal" class="delete">Remove card</button>
    </div>
    <Modal
      v-if="showModal"
      :card="card"
      @closeModal="closeModal"
      @removeCard="removeCard"
    />
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack.vue";
import Modal from "../components/Modal.vue";

export default {
  components: { Top, Card, CardStack, Modal },

  data() {
    return {
      card: this.$root.$data.cards[0],
      text: ["E-", "wallet", "Active card"],
      showModal: false,
      remove: false,
    };
  },
  methods: {
    changePage() {
      this.$router.push({ name: "AddCard" });
    },
    toggleModal() {
      this.showModal = true;
    },
    getData(data) {
      const oldActiveCard = this.card;
      const newActiveCard = this.$root.$data.cards[data];
      this.$root.$data.cards.splice(data, 1);
      this.$root.$data.cards.push(oldActiveCard);
      this.card = newActiveCard;
    },
    closeModal() {
      this.showModal = false;
    },
    removeCard() {
      this.$root.$data.cards.shift();
      this.card = this.$root.$data.cards[0];
      this.showModal = false;
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
  margin: 10px 10px;
  background: #00ce89;
  color: white;
  padding: 15px 0;
  width: 195px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
}
button.delete {
  background: #dc143c;
}
.button-container {
  display: flex;
}
</style>