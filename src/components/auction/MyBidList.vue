<template>
  <div class="black-bg" v-if="TrueModalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>선택한 경매 상품 찜하기가 되었습니다.</p>
      <br/>
      <div class="button-right">
        <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="TrueModalBox = false"
        >
          닫기
        </button>
      </div>
    </div>
  </div>

  <div class="black-bg" v-if="FalseModalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>선택한 경매 상품 찜하기가 취소 되었습니다.</p>
      <br/>
      <div class="button-right">
        <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="FalseModalBox = false"
        >
          닫기
        </button>
      </div>
    </div>
  </div>

  <div>
    <div class="page_title">
      <h2 class="page_title">입찰 내역</h2>
    </div>
    <div class="items" style="margin-bottom: 40px">
      <h3 class="title">입찰 내역</h3>
      <article class="auctionItem" v-for="(item, index) in itemList" :key="index">
        <figure class="thumbnail">
          <img
              :src="item.imageUrl"
              width="500"
              height="500"
          />
        </figure>
        <div class="auction_info">
          <div class="description">
            <dl>
              <dt>상품명</dt>
              <dd>{{ item.itemName }}</dd>
            </dl>
            <dl>
              <dt>입찰가</dt>
              <dd>{{ formatPrice(item.bidPrice) }} 원</dd>
            </dl>
            <dl>
              <dt>입찰하기 시작한 날짜</dt>
              <dd>{{ formatDate(item.createdAt) }}</dd>
            </dl>
            <dl>
              <dt>마지막 입찰 날짜</dt>
              <dd>{{ formatDate(item.updatedAt) }}</dd>
            </dl>
            <button @click="goToBidPage(item.auctionItemId)">상세보기</button>
          </div>
        </div>

        <div class="likes">
          <button
              type="button"
              class="btn btn-secondary btn-lg"
              @click="like(item.auctionItemId)"
          >
            ♥
          </button>
        </div>
      </article>
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
      TrueModalBox: false,
      FalseModalBox: false,
      itemList: [],
      currentPage: 1,
      totalPage: 1,
    };
  },
  mounted() {
    this.MyBidList();
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString();
    },

    formatDate(date) {
      const formattedDate = new Date(date);
      return formattedDate.toISOString().split("T")[0];
    },

    goToBidPage(auctionItemId) {
      this.$router.push(`/bids/${auctionItemId}`);
    },

    goToLoginPage() {
      this.$router.push("/login");
    },

    async getNewAccessToken(errorResponse) {
      localStorage.removeItem('accessToken');

      let tokens = errorResponse.headers.authorization.split(','); // This will split the string into an array of tokens
      let newAccessToken = tokens[0]; // The first token

      localStorage.setItem('accessToken', newAccessToken);
      await this.MyBidList(1);
    },

    async MyBidList(page = 1) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios({
          method: "get",
          url: `https://api.dcns-wantit.shop/v1/auction-items/bids?page=${page}&size=5`,
          headers: {
            'Authorization': accessToken
          },
        });
        console.log(response);
        const result = response.data;
        this.itemList = result.data.bidResponseDtoList;
        this.currentPage = page;
        this.totalPage = result.data.totalPage;
        console.log("response.data.data :", response.data.data);
      } catch (error) {
        if (error.response) {
          console.error('Server Response : ', error.response);
          if (error.response.status === 401 || error.response.status === 403) {
            await this.getNewAccessToken(error.response);
          } else {
            console.error('에러 : ', error);
            await this.getNewAccessToken(error.response);
          }
        } else {
          console.error('Error : ', error);
          alert('다시 로그인해주세요');
        }
      }
    },

    async like(auctionItemId) {
      let accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인 후 다시 시도해주세요.");
        this.goToLoginPage();
        return;
      }

      try {
        const response = await axios({
          method: "post",
          url: `https://api.dcns-wantit.shop/v1/auction-items/${auctionItemId}/likes`,
          headers: {
            Authorization: accessToken,
          },
        });

        console.log("like response :", response.data.data);
        console.log("like  :", response.data.data.liked);

        if (response.data.data.liked == true) {
          this.TrueModalBox = true;
        } else if (response.data.data.liked == false) {
          this.FalseModalBox = true;
        }
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert("좋아요가 제대로 반영되지 못했습니다. 다시 시도해주세요.");
        }
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.MyBidList(this.currentPage - 1);
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.MyBidList(this.currentPage + 1);
      }
    },
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

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%; /* 추가: 페이지의 80%만 차지하도록 설정 */
  margin: 0 auto; /* 추가: 가로 방향으로 중앙에 배치 */
}

.auctionItem {
  display: flex;
  position: relative;
  justify-content: flex-start; /* 수정: 요소들이 왼쪽에서부터 시작하도록 설정 */
  align-items: center;
  /* 경계선 추가 */
  border-bottom: 1px solid #ddd; /* 1px 두께의 더 옅은 색상의 경계선 */
  padding-bottom: 40px; /* 추가: 경계선을 요소의 상단에서 더 위에 위치시킴 */
  padding-top: 40px; /* 추가: 경계선을 요소의 하단에서 더 아래에 위치시킴 */
}

.auction_info {
  flex: 1;
}

.auctionItem > * {
  margin-right: 50px; /* 추가: 오른쪽 마진 설정 */
}

.thumbnail {
  margin-left: 0;
  padding-left: 0;
}

.thumbnail img {
  width: 200px;
  height: 200px;
}

.page_title {
  width: 100%;
  max-width: 1320px;
  color: rgb(17, 17, 17);
  position: relative;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin: 30px 0 20px 150px; /* top right bottom left  */
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  margin-top: 10px;
}

.description {
  color: rgb(85, 85, 85);
  flex: 1;
  margin-left: 100px;
  width: 300px;
}

.description button {
  margin-top: 20px;
  width: 170px;
  height: 48px;
  background: transparent;
  border: 1px solid rgb(235, 235, 235);
  color: rgb(85, 85, 85);
  border-radius: 2px;
  box-sizing: border-box;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

li {
  margin-right: 5px;
}

li button {
  margin: 0;
  padding: 0;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 1001; /* Increased z-index */
}

.white-bg {
  width: 25%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
</style>
