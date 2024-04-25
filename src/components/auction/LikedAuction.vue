<template>
  <div class="black-bg" v-if="modalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>선택한 경매 상품 찜하기가 취소 되었습니다. </p><br>
      <div class="button-right">
        <button type="button" class="btn btn-secondary btn-sm" @click="modalBox = false">닫기</button>
      </div>
    </div>
  </div>
  <div>
    <div class="page_title">
      <h2 class="page_title">내가 찜한 경매</h2>
    </div>
    <div class="items">
      <h3 class="title"> 내가 찜한 경매 </h3>
    </div>
    <div class="items" style="margin-bottom: 40px;">
      <article class="auctionItem" v-for="(item, index) in itemList" :key="index">
        <figure class="thumbnail">
          <img
              src="https://www.seoulauction.com/nas_img//front/main0892/7ce0281b-8928-4ff5-8857-dced87a87fa6.jpg"
              width="500" height="500">
        </figure>
        <div class="auction_info">
          <h3 class="title">{{ item.itemName }}</h3>
          <div class="description">
            <dl>
              <dt>경매 시작일</dt>
              <dd>{{ item.startDate }}</dd>
            </dl>
            <dl>
              <dt>경매 마감일</dt>
              <dd>{{ item.endDate }}</dd>
            </dl>
            <button @click="goToBidPage(item.auctionItemId)">상세보기</button>
          </div>
        </div>

        <div class="likes">
          <button type="button" class="btn btn-secondary btn-lg" @click="like(item.auctionItemId)">
            ♥
          </button>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      modalBox: false,
      itemList: [],

    }
  },

  methods: {
    goToBidPage(auctionItemId) {
      this.$router.push(`/bids/${auctionItemId}`);
    },
    goToLoginPage() {
      this.$router.push('/login');
    },
    async MyLikedAuctionItems() {
      try {
        let accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          alert('로그인 후 다시 시도해주세요.');
          this.goToLoginPage();
          return;
        }
        const response = await axios({
          method: 'get',
          url: 'https://api.dcns-wantit.shop/v1/auction-items/likes',
          params: {},
          headers: {
            'Authorization': accessToken // 헤더에 토큰 추가
          }
        });
        console.log('response.data.data :', response.data.data);
        this.itemList = response.data.data;
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },

    async like(auctionItemId) {
      let accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('로그인 후 다시 시도해주세요.');
        this.goToLoginPage();
        return;
      }

      try {
        await axios({
          method: 'post',
          url: `https://api.dcns-wantit.shop/v1/auction-items/${auctionItemId}/likes`,
          headers: {
            'Authorization': accessToken
          }
        });
        this.modalBox = true;
        this.MyLikedAuctionItems();
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert('좋아요가 제대로 반영되지 못했습니다. 다시 시도해주세요.');
        }
      }
    }
  },
  mounted() {
    this.MyLikedAuctionItems();
  },
}
</script>

<style scoped>
body {
  margin: 0
}

div {
  box-sizing: border-box;
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

</style>
