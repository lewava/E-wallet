<template>
  <div class="stack">
    <div class="card" v-for="(card, index) in cards" :key="index" @click="changeCard" :id="[`${index}`]">
      <div class="top">
        <div>
          <img src="../assets/wifi.png" />
          <img src="../assets/card-icon.png" />
        </div>
        <h3>{{ card.vendor }}</h3>
      </div>
      <h2>{{ card.number }}</h2>
      <div class="bottom">
        <p>
          <span>Cardholder name</span> <br />
          {{ card.holder }}
        </p>
        <p class="right">
          <span>Valid thru</span> <br />
          {{ card.month }}/{{ card.year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: this.$root.$data.cards
    };
  },
  methods: {
    changeCard(e) {
      this.$emit("sendData", e.currentTarget.id)
    }
  }
};
</script>

<style scoped>
.stack {
  position: relative;
  top: 430px;
  right: 220px;
  padding-bottom: 500px;
  background: pink;
}
.card:nth-child(1) {
  display: none;
}
.card:nth-child(2) {
  position: absolute;
  top: -420px;
}
.card:nth-child(3) {
  position: absolute;
  top: -360px;
}
.card:nth-child(4) {
  position: absolute;
  top: -300px;
}
.card:nth-child(5) {
  position: absolute;
  top: -240px;
}
.card:nth-child(6) {
  position: absolute;
  top: -180px;
}
.card:nth-child(7) {
  position: absolute;
  top: -120px;
}
.card:nth-child(8) {
  position: absolute;
  top: -60px;
}
</style>