<template>
  <div class="finishedDetail_container">
    <div class="finishedDetail_title" id="title">
      <h5>{{item.itemName}}</h5>
    </div>

    <img
      class="finishedDetail_image"
      src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
      alt="..."
    />
    <hr class="finishedDetail_line" />
    <div class="finishedDetail_description">
      <p>{{item.itemDescription}}</p>
      <p>시작가 : {{formattedBid(item.minPrice)}} 원</p>
      <p>낙찰가 : {{formattedBid(item.winPrice)}} 원</p>
    </div>
    <button type="button" class="btn btn-outline-dark" @click="goToList">
      닫기
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
        item: {},
    };
  },
  methods: {
    goToList() {
      this.$router.push("/finished-auctions");
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : '0';
    },
    async getAuctionItem(auctionItemId) {
      axios
        .get("http://localhost:8080/v1/auction-items/" + auctionItemId, {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          this.item = result.data;
        });
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.getAuctionItem(this.$route.params.id);
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
#title {
  margin-top: 100px;
  padding: 0;
}
.finishedDetail_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
}

.finishedDetail_image {
  display: block;
  width: 30%;
  height: 30vh;
  object-fit: cover;
  margin: 10px 10px 10px 10px;
}

.finishedDetail_line {
  display: block;
  width: 50%;
  border: 0.5px solid #000;
}

.finishedDetail_title {
  display: block;
  text-align: center;
  margin: 30px auto 5px auto;
  padding: 20px;
  width: 30%;
  height: auto;
  border-radius: 50px;
}

.finishedDetail_description {
  display: block;
  text-align: center;
  margin: 20px auto;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
  height: auto;
}

.finishedDetail_description p {
  margin: 0px 0;
}
</style>