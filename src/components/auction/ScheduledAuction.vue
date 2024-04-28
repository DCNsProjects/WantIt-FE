<template>
  <div class="container">
    <div class="card text-center" v-for="item in scheduledItems" :key="item.id">
      <div class="card-header">
        <h5 class="card-title">{{ item.itemName }}</h5>
      </div>
      <div class="card-body">
        <img
          :src="item.imageUrl"
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

  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage <= 1">&lt;</button>
    <span>{{ currentPage }} / {{ totalPage }}</span>
    <button @click="nextPage" :disabled="currentPage >= totalPage">&gt;</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ScheduledAuction",

  methods: {
    async getScheduledItems(page = 1) {
      axios
        .get(`https://api.dcns-wantit.shop/v1/auction-items/ready?page=${page}&size=5`, {
        })
        .then((response) => {
          const result = response.data;
          this.scheduledItems = result.data.responseDtoList;
          this.currentPage = page;
          this.totalPage = result.data.totalPage;
          console.log(this.scheduledItems);
        });
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
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
    prevPage() {
      if (this.currentPage > 1) {
        this.getScheduledItems(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getScheduledItems(this.currentPage + 1);
      }
    },
  },
  created() {
    this.getScheduledItems();
  },

  data() {
    return {
      scheduledItems: [],
      currentPage: 1,
      totalPage: 1,
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
.pagination {
  background: transparent;
  border: none;
  font-size: 1.5em;
  color: #333;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination button {
  border: none;
}
li {
  margin-right: 5px;
}

li button {
  margin: 0;
  padding: 0;
}
</style>
