<template>
  <div id="myCarousel" class="carousel slide mb-3" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class=""
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class=""
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class="active"
        aria-current="true"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>실시간 입찰 수 1위</h1>
            <p class="opacity-75">{{items[0].itemName}}</p>
            <p><a class="btn btn-lg btn-primary" href="#" @click="bid(items[0].auctionItemId)">바로가기</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>실시간 입찰 수 2위</h1>
            <p>{{items[1].itemName}}</p>
            <p><a class="btn btn-lg btn-primary" href="#" @click="bid(items[1].auctionItemId)">바로가기</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>실시간 입찰 수 3위</h1>
            <p>{{items[2].itemName}}</p>
            <p><a class="btn btn-lg btn-primary" href="#" @click="bid(items[2].auctionItemId)">바로가기</a></p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Top3Items",
  data() {
    return{
        items:[],
    }
  },
  methods: {
    async getTop3() {
      axios
        .get("https://api.dcns-wantit.shop/v1/auction-items/top3", {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          this.items = result.data;
        });
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
    this.getTop3();
  },
};
</script>

<style scoped>
@font-face {
  font-family: "jua";
  src: url("../../assets/fonts/BMJUA_ttf.ttf") format("truetype");
}

.carousel-item {
  height: 65vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  background-size: cover;
}

.btn {
  background-color: #ccc0f6;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  color: black;
}

.carousel {
  margin-bottom: -20px;
}
</style>
