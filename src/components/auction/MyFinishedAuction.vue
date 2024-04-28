<template>
  <div>
    <div class="page_title">
      <h2 class="page_title">낙찰 내역</h2>
    </div>
    <div class="items" style="margin-bottom: 40px">
      <h3 class="title">낙찰 내역</h3>
      <article
        class="auctionItem"
        v-for="(item, index) in finishedItems"
        :key="index"
      >
        <img :src="item.imageUrl" id="item-image" />
        <div class="auction_info">
          <div class="description">
            <dl>
              <dt>상품명</dt>
              <dd>{{ item.itemName }}</dd>
            </dl>
            <button @click="goToDetailPage(item.auctionItemId)" id="button-detail">
              상세보기
            </button>
          </div>
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
      finishedItems: [],
      currentPage: 1,
      totalPage: 1,
    };
  },

  methods: {
    goToDetailPage(auctionItemId) {
      this.$router.push(`/auction-items/${auctionItemId}/finished`);
    },

    async getNewAccessToken(errorResponse) {
      localStorage.removeItem('accessToken');
      let newAccessToken = errorResponse.headers.authorization;
      localStorage.setItem('accessToken', newAccessToken);
      await this.getFinishedAuctionItems(1);
    },

    async getFinishedAuctionItems(page = 1) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
            `https://api.dcns-wantit.shop/v1/auction-items/finished?page=${page}&size=5`, {
              headers: {
                'Authorization': accessToken
              }
            });
        const result = response.data;
        this.finishedItems = result.data.responseDtoList;
        this.currentPage = page;
        this.totalPage = result.data.totalPage;
        console.log(this.finishedItems);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            await this.getNewAccessToken(error.response);
          } else {
            alert('다시 로그인해주세요');
          }
        } else {
          console.error('Error : ', error);
          alert('다시 로그인해주세요');
        }
      }    
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.getFinishedAuctionItems(this.currentPage - 1);
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getFinishedAuctionItems(this.currentPage + 1);
      }
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

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%; /* 페이지의 70%만 차지하도록 설정 */
  margin: 0 auto; /* 가로 방향으로 중앙에 배치 */
}

.auctionItem {
  display: flex;
  position: relative;
  justify-content: center; /* 요소들이 가운데에서부터 시작하도록 설정 */
  align-items: center;
  border-bottom: 1px solid #ddd; /* 1px 두께의 더 옅은 색상의 경계선 */
  padding-bottom: 40px; /* 경계선을 요소의 상단에서 더 위에 위치시킴 */
  padding-top: 40px; /* 경계선을 요소의 하단에서 더 아래에 위치시킴 */
  padding-left: 40px;
  background-color: #f2f2f2;
}

.auction_info {
  flex: 1;
  display: flex;
  justify-content: center; /* 추가: 요소들을 가운데에 배치 */
  align-items: center; /* 추가: 요소들을 가운데에 배치 */
}

.auctionItem > * {
  margin-right: 50px; /* 오른쪽 마진 설정 */
}

#item-image {
  max-width: 30%;
  justify-content: center;
  margin-left: 20px;
}
.page_title {
  width: 100%;
  max-width: 1320px;
  color: rgb(17, 17, 17);
  position: relative;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin: 30px 0 20px; /* top right bottom left  */
  text-align: center; /* 추가: 텍스트를 가운데에 배치 */
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  margin-top: 10px;
  text-align: center; /* 추가: 텍스트를 가운데에 배치 */
}

.description {
  color: rgb(85, 85, 85);
  flex: 1;
  margin-left: 100px;
  width: 300px;
  text-align: center; /* 추가: 텍스트를 가운데에 배치 */
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
  justify-content: center; /* 추가: 요소들을 가운데에 배치 */
}

li {
  margin-right: 5px;
}

li button {
  margin: 0;
  padding: 0;
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
#button-detail{
  background-color: antiquewhite;
  border-radius: 10px;
  font-size: 120%;
  font-weight: bold;
}
</style>
