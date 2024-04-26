<template>
  <!-- top3 -->
  <div id="myCarousel" class="carousel slide mb-3" data-bs-ride="carousel" v-if = "items.length > 2">
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
          src=""
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>실시간 입찰 수 1위</h1>
            <p class="opacity-75">
              {{ items[0].itemName }}
            </p>
            <p>
              <a
                class="btn btn-lg btn-primary"
                href="#"
                @click="bid(items[0].auctionItemId)"
                >바로가기</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          :src="items[0].imageUrl"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>실시간 입찰 수 2위</h1>
            <p class="opacity-75">
              {{ items[1].itemName }}
            </p>
            <p>
              <a
                class="btn btn-lg btn-primary"
                href="#"
                @click="bid(items[1].auctionItemId)"
                >바로가기</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg
          class="bd-placeholder-img"
          width="100%"
          height="100%"
          src=""
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>실시간 입찰 수 3위</h1>
            <p class="opacity-75">
              {{ items[2].itemName }}
            </p>
            <p>
              <a
                class="btn btn-lg btn-primary"
                href="#"
                @click="bid(items[2].auctionItemId)"
                >바로가기</a
              >
            </p>
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

  <!-- category -->
  <div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-5 main">
      <div class="row g-5">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/shoe.jpg"
                  class="img-fluid"
                  @click="category(SHOES)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">신발</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/watch.jpg"
                  class="img-fluid"
                  @click="category(WATCH)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">시계</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/limited.jpg"
                  class="img-fluid"
                  @click="category(LIMITED_EDITION)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">리미티드 에디션</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/collab.jpg"
                  class="img-fluid"
                  @click="category(COLLABORATION)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">콜라보레이션</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/figure.jpg"
                  class="img-fluid"
                  style="margin-top: 30px"
                  @click="category(FIGURE)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">피규어</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/jewel.jpg"
                  class="img-fluid"
                  @click="category(JEWELRY)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">쥬얼리</div>
        </div>

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/picture.jpg"
                  class="img-fluid"
                  @click="category(ART)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">예술품</div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <a href="#" class="card-img">
                <img
                  src="../../assets/images/entique.jpg"
                  class="img-fluid"
                  @click="category(ANTIQUE)"
                />
              </a>
            </div>
          </div>
          <div class="card-footer">엔티크</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      SHOES: "SHOES",
      WATCH: "WATCH",
      LIMITED_EDITION: "LIMITED_EDITION",
      COLLABORATION: "COLLABORATION",
      FIGURE: "FIGURE",
      JEWELRY: "JEWELRY",
      ART: "ART",
      ANTIQUE: "ANTIQUE",
      items: [],
    };
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
    category(category) {
      this.$router.push({
        name: "category",
        path: "/category",
        params: {
          id: category,
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

@font-face {
  font-family: "jua";
  src: url("../../assets/fonts/BMJUA_ttf.ttf") format("truetype");
}

.card {
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 275px;
  height: 175px;
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-img img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-footer {
  margin-top: 5px;
  margin-left: 15px;
  font-family: "jua";
}

.bg-body-tertiary {
  background-color: #f7f2f8 !important;
}

.main {
  margin-top: 20px;
}
</style>
