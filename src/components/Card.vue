<template>
  <div class="card">
    <div class="top">
      <div>
        <img src="../assets/wifi.png" />
        <img src="../assets/card-icon.png" />
      </div>
      <h3>{{ vendor }}</h3>
    </div>
    <h2>{{ number }}</h2>
    <div class="bottom">
      <p>
        <span>Cardholder name</span> <br />
        {{ holder }}
      </p>
      <p class="right">
        <span>Valid thru</span> <br />
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],

  data() {
    return {
      holder: "Leon Wass Vallin",
      vendor: "Nordea",
      number: "1235 5678 9101 1123",
      date: "03/22",
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 420px;
  background: radial-gradient(circle, rgba(166,166,166,1) 0%, rgba(238,238,238,1) 0%, rgba(166,166,166,1) 100%);
  color: black;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}
h2 {
  font-family: "Electrolize", sans-serif;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: #000000;
  margin: 10px 0;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
p {
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
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
   color:  #00ce89;
}
</style>