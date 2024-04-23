<template>
  <div class="container">
    <h1 class="banner"><i class="bi bi-boxes"></i> My Auctions</h1>
    <div v-for="item in auctionItems" :key="item.id" class="auction-item">
      <img :src="item.image" alt="Auction Item" class="item-image" />
      <div class="item-info">
        <h2 class="title">{{ item.itemName }}</h2>
        <p class="des">{{ shortDescription(item.itemDescription) }}</p>
        <div class="info">
          <p class="bid">현재 입찰 금액: {{ formattedBid(item.minPrice) }}</p>

          <button class="btn btn-primary" type="submit" @click="updatePage">
            경매 수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      auctionItems: [],
    };
  },
  created() {
    this.getMyAuctionItems();
  },
  methods: {
    getMyAuctionItems() {
      const accessToken = localStorage.getItem("accessToken");

      axios
        .get("http://localhost:8080/v1/my/auction-items?page=1&size=5", {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
          headers: {
            Authorization: accessToken,
          },
        })
        .then((response) => {
          const result = response.data;
          this.auctionItems = result.data.responseDtoList;
        });
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
    },
    shortDescription(auctionItems) {
      return auctionItems.length > 150
        ? auctionItems.slice(0, 150) + "..."
        : auctionItems;
    },

    updatePage() {
      this.$router.push("/update-product");
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "bm";
  src: url("../../assets/fonts/BMHANNAPro.ttf") format("truetype");
}

.container {
  max-width: 800px;
  margin-top: 50px;
  padding: 20px;
}

.auction-item {
  display: flex;
  margin-bottom: 80px;
  border-bottom: 7px double #000000;
}

.item-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.banner {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 20px;
  font-family: "bm";
  color: #000000;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "bm";
}

.des {
  font-size: 15px;
  margin-bottom: 20px;
}

.bid {
  font-size: 17px;
  font-weight: bold;
}

.btn {
  border: none;
  color: rgb(0, 0, 0);
  background-color: #ccc0f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  margin-left: auto;
  align-self: flex-end;
}

.info {
  display: flex;
  margin-top: auto;
  justify-content: space-between;
}
</style>