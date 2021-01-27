<template>
  <div>
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
          {{ month }}/{{ year }}
        </p>
      </div>
    </div>

    <form @submit.prevent="addCard">
      <label>Card Number</label>
      <input type="text" v-mask="'#### #### #### ####'" v-model="number" required />
      <label>Cardholder name</label>
      <input type="text" required placeholder="Name" v-model="holder" />

      <div class="small">
        <div>
          <label>Month</label>
          <select v-model="month">
            <option disabled selected></option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          <label>Year</label>
          <select v-model="year">
            <option disabled selected></option>
            <option value="21">21</option>
            <option value="22">21</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>

      <label>Vendor</label>
      <select v-model="vendor">
        <option disabled selected></option>
        <option value="Nordea">Nordea</option>
        <option value="SEB">SEB</option>
        <option value="Swedbank">Swedbank</option>
        <option value="Handelsbanken">Handelsbanken</option>
      </select>

      <button>Add Card</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      holder: "",
      vendor: "",
      number: "",
      month: "MM",
      year: "YY",
    };
  },
  methods: {
    addCard() {
      const newCard = {
        holder: this.holder,
        vendor: this.vendor,
        number: this.number,
        month: this.month,
        year: this.year,
      };
      this.$root.$data.cards.push(newCard);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  padding: 20px;
  border-radius: 10px;
  background: #eee;
  margin: 30px auto;
  max-width: 400px;
}
label {
  display: block;
  color: rgb(80, 80, 80);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 0;
}
input,
select {
  padding: 15px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
}
.small {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.small div {
  width: 45%;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 15px 50px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}
</style>