<template>
  <div class="container">
    <!-- <div class="black-bg" v-if="비밀번호 == true">
      <div class="white-bg">
        <button
          type="button"
          class="btn-close top"
          aria-label="Close"
          @click="출금하기 = false"
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

    <div class="black-bg" v-if="충전하기 == true">
      <div class="white-bg">
        <button
          type="button"
          class="btn-close top"
          aria-label="Close"
          @click="충전하기 = false"
        ></button>
        <form class="d-grid gap-2 d-md-flex" role="search" style="height: 100px">
          <input
            class="form-control me-2"
            type="search"
            v-model="point"
            placeholder="충전 금액"
            aria-label="Search"
            style="height: 70px; margin-top: 15px"
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            style="width: 100px; height: 70px; margin-top: 15px"
            @click="charge"
          >
            확인
          </button>
        </form>
      </div>
    </div>

    <div class="black-bg" v-if="출금하기 == true">
      <div class="white-bg">
        <button
          type="button"
          class="btn-close top"
          aria-label="Close"
          @click="출금하기 = false"
        ></button>
        <form class="d-grid gap-2 d-md-flex" role="search" style="height: 100px">
          <input
            class="form-control me-2"
            type="search"
            v-model="point"
            placeholder="출금 금액"
            aria-label="Search"
            style="height: 70px; margin-top: 15px"
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            style="width: 100px; height: 70px; margin-top: 15px"
            @click="withdraw"
          >
            확인
          </button>
        </form>
      </div>
    </div>

    <div class="card-container">
      <div class="card">
        <div class="card-body">
          <div
            style="
              margin-left: 10px;
              margin-bottom: 25px;
              font-size: larger;
              font-weight: bold;
            "
          >
            {{ item.nickName + "  (" + item.username + ")  " }}
          </div>
          <div style="margin-left: 10px; margin-bottom: 5px">
            포인트: {{ formattedBid(item.point) }}
          </div>
          <div style="margin-left: 10px">
            가용 포인트: {{ formattedBid(item.availablePoint) }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="d-grid gap-2 d-md-flex justify-content-md-end"
      style="height: 60px; margin-left: 15%; margin-right: 15%"
    >
      <button class="btn btn-secondary w-50" type="button" @click="충전하기 = true">
        충전하기
      </button>
      <button class="btn btn-secondary w-50" type="button" @click="출금하기 = true">
        출금하기
      </button>
    </div>

    <div class="d-grid gap-2;">
      <button
        @click="gotolog"
        class="btn btn-secondary detail"
        type="button"
        style="height: 50px"
      >
        상세 내역 조회
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      유저이름: "희은따이",
      포인트: 100000,
      가용포인트: 5000,
      충전하기: false,
      출금하기: false,
      item: {},
      point: 0,
    };
  },
  created() {
    console.log();
    this.getPoint();
  },
  methods: {
    gotolog() {
      this.$router.push("/point-log");
    },
    async getPoint() {
      let accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인 후 다시 시도해주세요.");
      }
      axios
        .get("https://api.dcns-wantit.shop/v1/points", {
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
          console.log(response);
          const result = response.data;
          this.item = result.data;
        });
    },
    async charge() {
      try {
        const response = await axios.post(
          "https://api.dcns-wantit.shop/v1/points/charge",
          {
            changedPoint: this.point,
            details: "충전",
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
        console.log("충전 성공", response);
        alert("충전 성공했습니다.");
      } catch (error) {
        console.error("충전 실패", error);
        alert("충전 요청에 실패했습니다. 다시 시도해주세요.");
      }
    },
    async withdraw() {
      try {
        const response = await axios.post(
          "https://api.dcns-wantit.shop/v1/points/withdrawal",
          {
            changedPoint: -this.point,
            details: "출금",
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
        console.log("출금 성공", response);
        alert("출금 성공했습니다.");
      } catch (error) {
        console.error("출금 실패", error);
        alert("출금 요청에 실패했습니다. 다시 시도해주세요.");
      }
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
    },
  },
  components: {},
};
</script>

<style scoped>
.card-body {
  text-align: left;
}

.detail {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 10px;
}

.card {
  margin-top: 100px;
  margin-bottom: 50px;
  width: 50%;
  justify-content: center;
}

.card-container {
  display: flex;
  justify-content: center;
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
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 250;
}

.white-bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.pwWrap {
  width: 80%;
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

.btn {
  background-color: #ccc0f6;
  border: none;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
}

.header-container {
  display: flex;
  align-items: center;
}
</style>
