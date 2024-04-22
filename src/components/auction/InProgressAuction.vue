<template>
  <div class="container">
    <div v-for="item in items" :key="item.id" class="card">
      <div class="card-body">
        <div class="split-screen">
          <div class="left">
            <h4 style="margin-left: -10%; margin-bottom: 30px">
              {{ item.itemName }}
            </h4>
            <div style="margin-left: -10%">
              현재 입찰가 {{ formattedBid(item.minPrice) }}원
            </div>
            <div style="margin-left: -10%; margin-top: 10px">
              경매 마감일 {{ item.endDate }}
            </div>
            <button
              type="button"
              class="btn btn-outline-secondary"
              style="margin-left: -10%; margin-top: 20px; width: 150px"
              @click="bid(item.auctionItemId)"
            >
              상세보기
            </button>
          </div>
          <div class="v-line"></div>
          <div class="right">
            <div class="product-img">
              <img alt="Item" src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      items: [],
      currentBidPrice: 1000000,
    };
  },
  methods: {
    bid(auctionItemId) {
      this.$router.push({
        name: "bids",
        path: "/bids",
        params: {
          id: auctionItemId,
        },
      });
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : '0';
    },
    async getAuctionItemList() {
      axios
        .get(
          "http://localhost:8080/v1/auction-items/in-progress?page=1&size=5",
          {
            proxy: {
              protocol: "http",
              host: "127.0.0.1",
              port: 8080,
            },
          }
        )
        .then((response) => {
          const result = response.data;
          console.log(result);
          const items = result.data.responseDtoList;
          this.items = items;
        });
    },
  },
  created() {
    this.getAuctionItemList();
  },
};
</script>

<style scoped>
.filter-bar {
  margin-left: 70px;
  margin-top: 5%;
  display: flex;
  justify-content: center;
}

.split-screen {
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  flex: 1;
  padding: 1em;
}

.product-img {
  margin-left: 40%;
  margin-bottom: 25%;
}

.card {
  margin: 100px;
  padding: 30px;
  margin-bottom: 10px;
  width: 800px;
}

.product-img {
  width: 60px;
  height: 60px;
}

.card-body {
  text-align: center;
  width: auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  background-color: #ccc0f6;
  border: none;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
