<template>
  <div class="container">
    <h1 class="banner"><i class="bi bi-boxes"></i> My Auctions</h1>
    <div v-for="item in auctionItems" :key="item.id" class="auction-item">
      <img :src="item.imageUrl" alt="Auction Item" class="item-image"/>
      <div class="item-info">
        <h2 class="title">{{ item.itemName }}</h2>
        <p class="des">{{ shortDescription(item.itemDescription) }}</p>
        <div class="info">
          <p class="bid">현재 입찰 금액: {{ formattedBid(item.minPrice) }}</p>
        </div>
        <button
            class="btn btn-primary"
            type="submit"
            @click="updateProduct(item.auctionItemId)"
        >
          경매 수정
        </button>
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
  data() {
    return {
      auctionItems: [],
      currentPage: 1,
      totalPage: 1,
    };
  },
  created() {
    this.getMyAuctionItems();
  },
  methods: {
    async getNewAccessToken(errorResponse) {
      localStorage.removeItem('accessToken');
      let newAccessToken = errorResponse.headers.authorization;
      localStorage.setItem('accessToken', newAccessToken);
      await this.getMyAuctionItems(1);
    },

    async getMyAuctionItems(page = 1) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
            `https://api.dcns-wantit.shop/v1/my/auction-items?page=${page}&size=5`, {
              headers: {
                Authorization: accessToken,
              },
            });
        const result = response.data;
        this.auctionItems = result.data.responseDtoList;
        this.currentPage = page;
        this.totalPage = result.data.totalPage;
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            await this.getNewAccessToken(error.response);
          }
        } else {
          console.error('Error : ', error);
          alert('다시 로그인해주세요');
        }
      }
    },

    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
    },

    shortDescription(auctionItems) {
      return auctionItems.length > 150
          ? auctionItems.slice(0, 150) + "..."
          : auctionItems;
    },

    updateProduct(auctionItemId) {
      this.$router.push({
        name: "update-product",
        path: "/update-product",
        params: {
          id: auctionItemId,
        },
      });
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.getMyAuctionItems(this.currentPage - 1);
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getMyAuctionItems(this.currentPage + 1);
      }
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
