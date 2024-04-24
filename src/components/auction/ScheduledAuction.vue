<template>
  <div class="container">
    <div class="card text-center" v-for="item in scheduledItems" :key="item.id">
      <div class="card-header">
        <h5 class="card-title">{{ item.itemName }}</h5>
      </div>
      <div class="card-body">
        <img
          src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
          class="card-img-top"
          alt="items"
        />
        <div>{{ item.itemDescription }}</div>
        <p class="card-text">경매 시작 금액 : {{ formattedBid(item.minPrice) }}원</p>
      </div>
      <div class="card-footer text-body-secondary">
        <p class="card-text">경매 시작 일자 : {{ item.startDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ScheduledAuction",

  methods: {
    async getScheduledItems() {
      axios
        .get("http://localhost:8080/v1/auction-items/ready?page=1&size=5", {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          const result = response.data;
          this.scheduledItems = result.data.responseDtoList;
          console.log(this.scheduledItems);
        });
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : '0';
    },
    bid(auctionItemId) {
      this.$router.push({
        name: "bids",
        path: "/bids",
        params: {
          id: auctionItemId,
        },
      });
    },
  },
  created() {
    this.getScheduledItems();
  },

  data() {
    return {
      scheduledItems: [],
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "nngt";
  src: url("../../assets/fonts/NanumGothic.ttf") format("truetype");
}

* {
  font-family: "nngt";
}

.container {
  margin-top: 100px;
  width: 50%;
}

.card-img-top {
  width: 50%;
  max-height: 500px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
}

.btn {
  background-color: #ccc0f6;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: black;
}

.card {
  margin-top: 50px;
}

.card-text {
  font-size: 15px;
}
</style>