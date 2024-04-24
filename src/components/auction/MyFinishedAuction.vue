<template>
  <div>
    <div class="page_title">
      <h2 class="page_title">낙찰 내역</h2>
    </div>
    <div class="items" style="margin-bottom: 40px;">
      <h3 class="title"> 낙찰 내역  </h3>
      <article class="auctionItem" v-for="(item, index) in finishedItems" :key="index">
        <figure class="thumbnail">
          <img
              src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
              width="500" height="500">
        </figure>
        <div class="auction_info">

          <div class="description">
            <dl>
              <dt>상품명</dt>
              <dd>{{ item.itemName }}</dd>
            </dl>
            <dl>
              <dt>상품설명</dt>
              <dd>{{ item.itemDescription }}</dd>
            </dl>
            <dl>
              <dt>낙찰 최소 가</dt>
              <dd>{{ item.minPrice.toLocaleString() }} 원</dd>
            </dl>
            <dl>
              <dt>낙찰하기 시작한 날짜</dt>
              <dd>{{ new Date(item.startDate).toISOString().substring(0, 10) }}</dd>
            </dl>
            <dl>
              <dt>최종 낙찰 날짜</dt>
              <dd>{{ new Date(item.endDate).toISOString().substring(0, 10) }}</dd>
            </dl>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      finishedItems: [],
    };
  },

  methods: {
    detail(auctionItemId) {
      this.$router.push({
        name: "finishedDetail",
        path: "/finished-detail",
        params: {
          id: auctionItemId,
        },

      });
    },
    async getFinishedAuctionItems() {
      axios
      .get("http://localhost:8080/v1/auction-items/finished?page=1&size=5", {
        proxy: {
          protocol: "http",
          host: "127.0.0.1",
          port: 8080,
        },
      })
      .then((response) => {
        const result = response.data;
        this.finishedItems = result.data.responseDtoList;
        console.log(this.finishedItems);
      });
    },
  },
  created() {
    this.getFinishedAuctionItems();
  },
};
</script>

<style scoped>
body {
  margin: 0
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

</style>

