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
              경매 시작가 : {{ formattedBid(item.minPrice) }} 원
            </div>
            <div style="margin-left: -10%; margin-top: 10px">
              경매 마감일 : {{ converDate(item.endDate) }} 19:00 까지
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
              <img alt="item-image" :src="item.imageUrl" />
            </div>
          </div>
        </div>
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
  name: "App",
  data() {
    return {
      items: [],
      currentBidPrice: 1000000,
      currentPage: 1,
      totalPage: 1,
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
      return price !== undefined ? price.toLocaleString() : "0";
    },
    converDate(date) {
      let parts = date.split("T");
      return parts[0];
    },
    async getAuctionItemList(page = 1) {
      axios
        .get(`https://api.dcns-wantit.shop/v1/auction-items/in-progress?page=${page}&size=5`, {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          const result = response.data;
          console.log(result);
          const items = result.data.responseDtoList;
          this.items = items;
          this.currentPage = page;
          this.totalPage = result.data.totalPage;
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.getAuctionItemList(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getAuctionItemList(this.currentPage + 1);
      }
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
