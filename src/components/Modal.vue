<template>
  <div class="modal">
    <h3>Remove card</h3>
    <p>
      Are you sure you want to remove your card with the card number <br />
      {{ card.number }}
    </p>
    <div class="button-container">
      <button class="remove" @click="removeCard">Remove</button>
      <button @click="closeModal">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    removeCard() {
      this.$emit("removeCard");
    },
  },
};
</script>

<style scoped>
.modal {
  box-sizing: border-box;
  border-radius: 6px;
  background: white;
  width: 550px;
  border: 1px solid rgb(226, 226, 226);
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 5px 12px -3px rgba(0, 0, 0, 0.68);
}
h3 {
  color: #dc143c;
  font-size: 18px;
  border-bottom: 1px solid rgb(226, 226, 226);
  padding: 15px;
  text-align: left;
  margin: 0;
}
p {
  font-size: 14px;
  border-bottom: 1px solid rgb(226, 226, 226);
  text-align: left;
  padding: 10px;
  margin: 0;
  line-height: 20px;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}
button {
  margin: 0 5px;
  background: #a6a7a6;
  color: white;
  padding: 10px 0;
  width: 80px;
  border: 0;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
}
button.remove {
  background: #dc143c;
}
</style>