<template>
  <div class="stack">
    <div
      class="card stackShadow"
      v-for="(card, index) in cards"
      :key="index"
      @click="changeCard"
      :id="[`${index}`]"
      :class="{
        bitcoin: card.vendor === 'bitcoin',
        blockchain: card.vendor === 'blockchain',
        evil: card.vendor === 'evil',
        ninja: card.vendor === 'ninja',
      }"
    >
      <div class="top">
        <div>
          <img v-if="card.vendor === 'bitcoin'" src="../assets/chip-dark.svg" />
          <img v-else src="../assets/chip-light.svg" />
        </div>
        <img
          class="logo"
          v-if="card.vendor === 'bitcoin'"
          src="../assets/vendor-bitcoin.svg"
        />
        <img
          class="logo"
          v-else-if="card.vendor === 'blockchain'"
          src="../assets/vendor-blockchain.svg"
        />
        <img
          class="logo"
          v-else-if="card.vendor === 'evil'"
          src="../assets/vendor-evil.svg"
        />
        <img
          class="logo"
          v-else-if="card.vendor === 'ninja'"
          src="../assets/vendor-ninja.svg"
        />
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
      cards: this.$root.$data.cards,
    };
  },
  methods: {
    changeCard(e) {
      this.$emit("sendData", e.currentTarget.id);
    },
  },
};
</script>

<style scoped>
.stackShadow {
  box-shadow: 1px 6px 15px -9px rgba(0, 0, 0, 0.64);
}
.stack {
  margin-top: 215px;
}
.card {
  position: sticky;
  margin-top: -205px;
}
.card:nth-child(1) {
  display: none;
}
</style>