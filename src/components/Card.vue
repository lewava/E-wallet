<template>
  <div class="card active">
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
}
h2 {
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
p {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
  text-align: left;
}
p span {
  font-size: 12px;
  color: rgb(80, 80, 80);
  font-weight: 400;
}
.right {
  text-align: end;
}
img {
  width: 50px;
  display: block;
}
.top {
  display: flex;
  justify-content: space-between;
}
h3 {
  font-size: 24px;
  color: #00ce89;
  margin: 0;
}
.active {
  margin-bottom: 240px;
}
</style>