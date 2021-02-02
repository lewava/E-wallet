<template>
  <div
    class="card"
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
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 205px;
  background: radial-gradient(
    circle,
    rgba(166, 166, 166, 1) 0%,
    rgba(238, 238, 238, 1) 0%,
    rgba(166, 166, 166, 1) 100%
  );
  margin: 0 auto;
  color: black;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 4px 5px 12px -3px rgba(0, 0, 0, 0.68);
}
.card h2 {
  font-family: "Electrolize", sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #000000;
  margin: 10px 0;
  letter-spacing: 5px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.card p {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
  text-align: left;
}
.card p span {
  font-size: 12px;
  color: rgb(80, 80, 80);
  font-weight: 400;
}
.right {
  text-align: right !important;
}
.card img {
  width: 50px;
  display: block;
}
.top {
  display: flex;
  justify-content: space-between;
}
.logo {
  height: 40px;
  width: 40px;
}
.bitcoin {
  background-color: #ef5734;
  background-image: linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%);
}
.blockchain {
  background-color: #6c33a3;
  background-image: linear-gradient(316deg, #6c33a3 0%, #8241b8 74%);
}
.blockchain h2 {
  color: white;
}
.blockchain p {
  color: white;
}
.blockchain p span {
  color: rgb(172, 169, 169);
}
.evil {
  background-color: #ad2f26;
  background-image: linear-gradient(147deg, #ad2f26 0%, #99201c 74%);
}
.evil h2 {
  color: white;
}
.evil p {
  color: white;
}
.evil p span {
  color: rgb(172, 169, 169);
}
.ninja {
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
}
.ninja h2 {
  color: white;
}
.ninja p {
  color: white;
}
.ninja p span {
  color: rgb(172, 169, 169);
}
</style>