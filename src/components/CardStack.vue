<template>
  <div class="stack">
    <div
      class="card noShadow"
      v-for="(card, index) in cards"
      :key="index"
      @click="changeCard"
      :id="[`${index}`]"
    >
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
.noShadow {
  box-shadow: 1px 6px 15px -9px rgba(0, 0, 0, 0.64);
}
.stack {
  margin-top: 210px;
}
.card {
  position: sticky;
  margin-top: -200px;
}
.card:nth-child(1) {
  display: none;
}
</style>