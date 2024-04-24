<template>
  <div class="black-bg" v-if="호가정책 == true" style="">
    <div class="white-bg">
      <div class="header-container">
        <h4>경매 호가표</h4>
        <button
          type="button"
          class="btn-close top"
          aria-label="Close"
          @click="호가정책 = false"
        ></button>
      </div>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">현재가 이상 (원)</th>
            <th scope="col">현재가 미만 (원)</th>
            <th scope="col">호가 단위 (원)</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>~</td>
            <td>50만</td>
            <td>1만</td>
          </tr>
          <tr>
            <td>50만</td>
            <td>100만</td>
            <td>5만</td>
          </tr>
          <tr>
            <td>100만</td>
            <td>300만</td>
            <td>10만</td>
          </tr>
          <tr>
            <td>300만</td>
            <td>500만</td>
            <td>20만</td>
          </tr>
          <tr>
            <td>500만</td>
            <td>1,000만</td>
            <td>30만</td>
          </tr>
          <tr>
            <td>1,000만</td>
            <td>3,000만</td>
            <td>50만</td>
          </tr>
          <tr>
            <td>3,000만</td>
            <td>5,000만</td>
            <td>100만</td>
          </tr>
          <tr>
            <td>5,000만</td>
            <td>1억</td>
            <td>200만</td>
          </tr>
          <tr>
            <td>1억</td>
            <td>2억</td>
            <td>300만</td>
          </tr>
          <tr>
            <td>2억</td>
            <td>~</td>
            <td>500만</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="black-bg" v-if="낙찰수수료 == true">
    <div class="white-bg">
      <div class="header-container">
        <h4>낙찰 수수료</h4>
        <button
          type="button"
          class="btn-close top"
          aria-label="Close"
          @click="낙찰수수료 = false"
        ></button>
      </div>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">국내 경매</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td>일괄 20%</td>
          </tr>
        </tbody>
      </table>
      <div>- 판매자에게 판매금액에 대한 수수료 부과</div>
    </div>
  </div>

  <!-- <div class="black-bg" v-if="비밀번호 == true">
    <div class="white-bg header-container">
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="입찰하기 = false"
      ></button>
      <div class="pwWrap">
        <div class="pwSection">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <p class="message">&nbsp;</p>
        </div>
        <div class="numberSection">
          <button class="number">1</button>
          <button class="number">2</button>
          <button class="number">3</button>
          <button class="number">4</button>
          <button class="number">5</button>
          <button class="number">6</button>
          <button class="number">7</button>
          <button class="number">8</button>
          <button class="number">9</button>
          <button class="number">0</button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="black-bg" v-if="입찰하기 == true">
    <div class="white-bg">
      <button
        type="button"
        class="btn-close top"
        aria-label="Close"
        @click="입찰하기 = false"
      ></button>
      <form class="d-grid gap-2 d-md-flex" role="search" style="height: 100px">
        <input
          class="form-control me-2"
          type="search"
          v-model="bid"
          placeholder="입찰 금액"
          aria-label="Search"
          style="height: 70px; margin-top: 15px"
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          style="width: 100px; height: 70px; margin-top: 15px"
          @click="createBid(auctionItemId)"
        >
          확인
        </button>
      </form>
    </div>
  </div>

  <div class="container">
    <div class="split-screen">
      <div class="left">
        <div class="product-img">
          <img alt="Vue logo" src="" />
        </div>
      </div>
      <div class="v-line"></div>
      <div class="right">
        <div class="price-wrapper">
          <div class="price-wrapper2">
            <div class="max-price">현재 최고가</div>
            <div class="price">{{ formattedBid(currentPrice) }} 원</div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="product name">{{ item.itemName }}</h4>
            <div>{{ item.itemDescription }}</div>
          </div>
        </div>
        <div class="date">경매 종료일: {{ item.endDate }}</div>
        <hr />
        <div class="d-grid gap-4 d-md-flex justify-content-md-end bid-btn">
          <button class="btn btn-secondary w-75" type="button" @click="입찰하기 = true">
            입찰하기
          </button>
          <button class="btn btn-secondary w-25" type="button" @click="like()">
            <i class="bi bi-bookmark-heart-fill"></i>
          </button>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            class="btn btn-outline-secondary me-md-2"
            type="button"
            @click="호가정책 = true"
          >
            호가 정책
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="낙찰수수료 = true"
          >
            수수료 정책
          </button>
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
      currentPrice: 0,
      item: {},
      호가정책: false,
      낙찰수수료: false,
      입찰하기: false,
      bid: 0,
      auctionItemId: undefined,
    };
  },
  methods: {
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
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
          this.currentPrice = this.item.minPrice;
        });
    },
    async getTopBid(auctionItemId) {
      axios
        .get("http://localhost:8080/v1/auction-items/" + auctionItemId + "/bids/top", {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          this.currentPrice = result.data.bidPrice;
        });
    },
    async like() {
      console.log(localStorage.getItem("accessToken"));
      await axios.post(
        "http://localhost:8080/v1/auction-items/" + this.auctionItemId + "/likes",
        null,
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
        }
      );
    },
    async createBid(auctionItemId) {
      try {
        const response = await axios.post(
          "http://localhost:8080/v1/auction-items/" + auctionItemId + "/bids",
          {
            bidPrice: this.bid,
          },
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            proxy: {
              protocol: "http",
              host: "127.0.0.1",
              port: 8080,
            },
          }
        );
        console.log("입찰 성공", response);
        alert("입찰 성공했습니다.");
      } catch (error) {
        console.error("입찰 실패", error);
        alert("입찰 요청에 실패했습니다. 다시 시도해주세요.");
      }
    },
  },
  created() {
    // const EventSource = NativeEventSource || EventSourcePolyfill;
    const url =
      "url : http://localhost:8080/v1/live-bids/auction-items/" + this.$route.params.id;
    console.log(url);

    const eventSource = new EventSource(
      "http://localhost:8080/v1/live-bids/auction-items/" + this.$route.params.id
    );

    eventSource.addEventListener("bidUpdate", (event) => {
      const newPrice = JSON.parse(event.data).bidPrice;
      this.item.minPrice = newPrice;
    });
    eventSource.onmessage = (event) => {
      this.item.minPrice = event.data.bidPrice;
    };
    eventSource.onerror = (error) => {
      console.error("error : ", error);
      eventSource.close();
    };

    this.getAuctionItem(this.$route.params.id);
    this.getTopBid(this.$route.params.id);
    this.auctionItemId = this.$route.params.id;
  },
};
</script>

<style scoped>
.split-screen {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.v-line {
  border-left: thin solid lightgrey;
  height: 600px;
  left: 50%;
  margin-top: 20px;
  position: absolute;
}

.left,
.right {
  flex: 1;
  padding: 1em;
  padding-right: 50px;
  padding-left: 50px;
}

.product-img {
  margin: 30%;
}

.card {
  padding: 30px;
  margin-bottom: 40px;
}

.bid-btn {
  height: 60px;
  margin-bottom: 30px;
}

.price-wrapper {
  height: 120px;
  display: flex;
  align-items: center;
}

.header-container {
  display: flex;
  align-items: center;
}

.btn {
  background-color: #ccc0f6;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: black;
}

.max-price {
  text-align: left;
}

.price {
  font-size: x-large;
  text-align: left;
}

.name {
  text-align: left;
  margin-bottom: 20px;
}

.date {
  text-align: right;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
  color: rgb(61, 61, 61);
}

.top {
  margin-left: auto;
  margin-bottom: 20px;
}

.bi {
  font-size: 1.5rem;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 250;
}

.white-bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.pwWrap {
  width: 60%;
  max-width: 450px;
  background: lightgray;
  margin: 20px auto;
}

.pwWrap .pwSection {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
}

.pwWrap .pwSection .dot {
  display: block;
  width: 10px;
  height: 10px;
  background: darkgrey;
  border-radius: 100%;
  margin: 0 5px;
}

.pwWrap .pwSection .dot.active {
  background: rgba(0, 0, 0, 0.7);
}

.pwWrap .pwSection .message {
  position: absolute;
  bottom: 5px;
  left: 0;
  z-index: 1;
  min-width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.03em;
  opacity: 0;
  transition: 0.2s ease-out;
}

.pwWrap .numberSection {
  overflow: hidden;
}

.pwWrap .numberSection .number {
  float: left;
  width: 33.33%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  cursor: pointer;
  background: whitesmoke;
}

.pwWrap .numberSection .number:last-child {
  margin-left: 33.33%;
}

.pwWrap.error .message {
  opacity: 1;
  color: red;
}

.pwWrap.confirm .message {
  opacity: 1;
  color: green;
}
</style>
