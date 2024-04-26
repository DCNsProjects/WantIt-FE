<template>
  <div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-4 main">
      <h1 class="text-body-emphasis maintext">
        <i class="bi bi-box-fill"></i>
      </h1>
      <p class="lead">
        ❗ 본 페이지에서 경매품을 수정할 수 있습니다. ❗<br />
        ❗ 판매 금지 품목은 경고 없이 삭제될 수 있습니다. ❗<br />
        ❗ 경매 시작일은 현재 날짜로부터 최소 1일 이후부터 설정 가능합니다.
        ❗<br />
        ❗ 경매 오픈 시각 09:00 , 경매 마감 시각 19:00 ❗<br />
      </p>
    </div>
  </div>
  <div class="container form">
    <form>
      <div class="form-group">
        <label for="productName" class="form-label">상품명</label>
        <input
          type="text"
          id="productName"
          v-model="itemName"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="productDescription" class="form-label">상품 설명</label>
        <textarea
          id="productDescription"
          v-model="itemDescription"
          required
          class="form-control"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="productDescription" class="form-label">카테고리</label>
        <div class="filter-bar">
          <select
            class="form-select"
            id="country"
            required=""
            @change="changeCategory"
          >
            <option value="">선택</option>
            <option value="SHOES">신발</option>
            <option value="WATCH">시계</option>
            <option value="LIMITED_EDITION">리미티드 에디션</option>
            <option value="COLLABORATION">콜라보레이션</option>
            <option value="FIGURE">피규어</option>
            <option value="JEWELRY">쥬얼리</option>
            <option value="ART">예술품</option>
            <option value="ANTIQUE">엔티크</option>
            <option value="ETC">기타</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="auctionStartPrice" class="form-label">경매 시작금액</label>
        <input
          type="number"
          id="auctionStartPrice"
          v-model="minPrice"
          required
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="auctionStartDate" class="form-label">경매 시작일</label>
        <input
          type="date"
          id="auctionStartDate"
          v-model="startDate"
          required
          class="form-control"
          :min="today"
        />
      </div>
      <div class="form-group">
        <label for="auctionEndDate" class="form-label">경매 종료일</label>
        <input
          type="date"
          id="auctionEndDate"
          v-model="endDate"
          required
          class="form-control"
          :min="today"
        />
      </div>
      <div class="form-group">
        <label for="productImage" class="form-label">상품 이미지</label>
        <input
          @change="imageUpload()"
          ref="images"
          type="file"
          class="form-control"
          id="productImage"
          name="productImage"
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="updateProductWithImage"
      >
        수 정 하 기
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      today: this.getToday(),
      auctionItemId: undefined,
      itemName: "",
      itemDescription: "",
      minPrice: undefined,
      startDate: undefined,
      endDate: undefined,
      category: "",
      productImage: "",
    };
  },
  methods: {
    imageUpload() {
      this.imageFile = this.$refs.images.files[0];
    },
    async updateProductWithImage() {
      try {
        const formData = new FormData();
        const dto = {
          itemName: this.itemName,
          itemDescription: this.itemDescription,
          minPrice: this.minPrice,
          category: this.category,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        const blob = new Blob([JSON.stringify(dto)], {
          type: "application/json",
        });

        formData.append("file", this.imageFile);
        formData.append("requestBody", blob);

        axios.put(
          "https://api.dcns-wantit.shop/v1/my/auction-items/" +
            this.auctionItemId,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          }
        );
        alert("경매 상품 정보가 수정되었습니다.");
        this.$router.push("/");
      } catch (error) {
        alert("경매 상품 정보 수정에 실패하엿습니다. 다시 시도해주세요.");
      }
    },
    getToday() {
      let today = new Date();
      let dd = String(today.getDate() + 1).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },
    convertToDate(str, hour) {
      let parts = str.split("-");
      let year = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10) - 1;
      let day = parseInt(parts[2], 10);

      let date = new Date(Date.UTC(year, month, day));
      date.setUTCHours(hour, 0, 0, 0);

      return date;
    },
    async changeCategory(event) {
      const selectFilter = event.target.value;
      switch (selectFilter) {
        case "SHOES":
          this.category = "SHOES";
          break;
        case "WATCH":
          this.category = "WATCH";
          break;
        case "LIMITED_EDITION":
          this.category = "LIMITED_EDITION";
          break;
        case "COLLABORATION":
          this.category = "COLLABORATION";
          break;
        case "FIGURE":
          this.category = "FIGURE";
          break;
        case "JEWELRY":
          this.category = "JEWELRY";
          break;
        case "ART":
          this.category = "ART";
          break;
        case "ANTIQUE":
          this.category = "ANTIQUE";
          break;
        case "ETC":
          this.category = "ETC";
          break;
      }
    },
  },
  created() {
    this.auctionItemId = this.$route.params.id;
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

.form {
  width: 40%;
  margin: 0 auto;
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

.form-group {
  margin-bottom: 20px;
}
</style>
