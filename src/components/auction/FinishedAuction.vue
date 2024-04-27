<template>
  <div class="container">
    <div class="row" v-for="item in finishedItems" :key="item.id">
      <div class="items finishedAuctionItems" style="margin-bottom: 40px">
        <div class="finishedAuctionCard" @click="detail(item.auctionItemId)">
          <img
            :src="item.imageUrl"
            class="card-img-top"
            alt="..."
          />
          <div class="finishedAuctionCardBody">
            <p class="card-text">{{ item.itemName }}</p>
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
      finishedItems: [],
      currentPage: 1,
      totalPage: 1,
    };
  },

  methods: {
    detail(auctionItemId) {
      this.$router.push({
        name: "finishedDetail",
        path: "/finished-detail",
        params: {
          id: auctionItemId,
        },
      });
    },
    async getFinishedAuctionItems(page = 1) {
      axios
        .get(`https://api.dcns-wantit.shop/v1/auction-items/finished?page=${page}&size=5`, {
        })
        .then((response) => {
          const result = response.data;
          this.finishedItems = result.data.responseDtoList;
          this.currentPage = page;
          this.totalPage = result.data.totalPage;
          console.log(this.finishedItems);
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.getFinishedAuctionItems(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getFinishedAuctionItems(this.currentPage + 1);
      }
    },
  },
  created() {
    this.getFinishedAuctionItems();
  },
};
</script>

<style scoped>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.finishedAuctionItems {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center !important;
}

.finishedAuctionCard {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: calc(33.33%);
  height: 200px !important;
  margin: 0.5rem 30px 0 30px;
  cursor: pointer;
}

.finishedAuctionCard img {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  max-height: 120px !important;
  object-fit: cover !important;
}

.finishedAuctionCardBody {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  height: 50px !important;
  overflow: auto;
  text-align: center;
}

.container {
  margin-top: 90px;
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
