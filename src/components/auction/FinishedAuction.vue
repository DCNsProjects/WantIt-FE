<template>
  <div class="container">
    <div class="row" v-for="item in finishedItems" :key="item.id">
      <div class="items finishedAuctionItems" style="margin-bottom: 40px">
        <div
          class="finishedAuctionCard"
          @click="detail(item.auctionItemId)"
        >
          <img
            src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
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
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      finishedItems: [],
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
    async getFinishedAuctionItems() {
      axios
        .get("http://localhost:8080/v1/auction-items/finished?page=1&size=5", {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          const result = response.data;
          this.finishedItems = result.data.responseDtoList;
          console.log(this.finishedItems);
        });
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
</style>
