<template>
  <div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-4 main">
      <h1 class="text-body-emphasis maintext">
        <i class="bi bi-box-fill"></i>
      </h1>
      <p class="lead">
        ❗ 본 페이지에서 경매품을 등록할 수 있습니다. ❗<br />
        ❗ 판매 금지 품목은 경고 없이 삭제될 수 있습니다. ❗<br />
        ❗ 경매 시작일은 현재 날짜로부터 최소 1일 이후부터 설정 가능합니다.
        ❗<br />
        ❗ 경매 종료는 시작당일 오후 7시에 자동으로 종료됩니다. ❗<br />
      </p>
    </div>
  </div>
  <div style="margin-top: 50px">
    <form class="addProduct">
      <div class="mb-3">
        <label for="productName" class="form-label">상품명</label>
        <input
          type="text"
          class="form-control"
          id="productName"
          name="productName"
          v-model="itemName"
        />
      </div>

      <div class="mb-3">
        <label for="productDescription" class="form-label">상품 설명</label>
        <textarea
          class="form-control"
          id="productDescription"
          name="productDescription"
          v-model="itemDescription"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="startingPrice" class="form-label">경매 시작금액</label>
        <input
          type="number"
          class="form-control"
          id="startingPrice"
          name="startingPrice"
          v-model="minPrice"
        />
      </div>

      <div class="mb-3">
        <label for="auctionStartDate" class="form-label">경매 시작일</label>
        <input
          type="date"
          class="form-control"
          id="auctionStartDate"
          name="auctionStartDate"
          :min="today"
          v-model="startDate"
        />
      </div>

      <div class="mb-3">
        <label for="auctionStartDate" class="form-label">경매 종료일</label>
        <input
          type="date"
          class="form-control"
          id="auctionStartDate"
          name="auctionStartDate"
          :min="today"
          v-model="endDate"
        />
      </div>
      <div class="mb-3">
        <label for="productImage" class="form-label">이미지 등록</label>
        <input
          type="file"
          class="form-control"
          id="productImage"
          name="productImage"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="createProduct"
      >
        등 록 하 기
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      today: this.getToday(),
      itemName: "",
      itemDescription: "",
      minPrice: undefined,
      startDate: undefined,
      endDate: undefined,
    };
  },
  methods: {
    getToday() {
      let today = new Date();
      let dd = String(today.getDate() + 1).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },
    convertToDate(str) {
      let parts = str.split("-");
      let year = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10) - 1;
      let day = parseInt(parts[2], 10);

      let date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);

      return date;
    },
    async createProduct() {
      try {
        axios.post(
          "http://localhost:8080/v1/my/auction-items",
          {
            itemName: this.itemName,
            itemDescription: this.itemDescription,
            minPrice: this.minPrice,
            startDate: this.convertToDate(this.startDate),
            endDate: this.convertToDate(this.endDate),
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
        alert("상품이 등록되었습니다.");
        this.$router.push("/");
      } catch (error) {
        alert("상품 등록에 실패하엿습니다. 다시 시도해주세요.");
      }
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "nngt";
  src: url("../../assets/fonts/NanumGothic.ttf") format("truetype");
}

@font-face {
  font-family: "jua";
  src: url("../../assets/fonts/BMJUA_ttf.ttf") format("truetype");
}

* {
  font-family: "nngt";
  font-size: 20px;
}

.addProduct {
  width: 40%;
  margin: 0 auto;
}

.form-control {
  border-radius: 15px;
  border-color: #ccc0f6;
}

.form-label {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
  margin-bottom: 3px;
}

.btn {
  margin-top: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 50px;
  color: rgb(0, 0, 0);
  font-size: larger;
  font-family: jua;
  background-color: #ccc0f6;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.maintext {
  font-size: 50px;
  font-weight: bold;
  color: #ccc0f6;
  font-family: jua;
}

.main {
  margin-top: 110px;
  background-color: #eeebfa !important;
}

.bi {
  font-size: 100px;
  color: #6342d8;
}
</style>
