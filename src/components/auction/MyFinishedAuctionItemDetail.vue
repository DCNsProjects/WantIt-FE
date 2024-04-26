<template>
  <div class="finishedDetail_container" v-if="item">
    <div class="finishedDetail_title" id="title">
      <h5>{{ item.itemName }}</h5>
    </div>

    <img class="finishedDetail_image"
         :src="item.imageUrl">

    <hr class="finishedDetail_line"/>
    <div class="finishedDetail_description">
      <p> 설명 : {{ item.itemDescription }}</p>
      <p>시작가 : {{ formatPrice(item.minPrice) }} 원</p>
      <p>낙찰가 : {{ formatPrice(item.winPrice) }} 원</p>
      <p>낙찰 시작 날짜 : {{ formatDate(item.startDate) }} </p>
      <p>최종 낙찰 날짜 : {{ formatDate(item.endDate) }} </p>
    </div>
    <button type="button" class="btn btn-outline-dark" @click="goToList">
      닫기
    </button>
  </div>
  <div v-else>
    <!-- 데이터가 로드되지 않은 경우 보여줄 내용 -->
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      item: null,
    };
  },
  methods: {
    goToList() {
      this.$router.push("/auction-items/finished");
    },

    formatPrice(price) {
      return price ? price.toLocaleString() : "";
    },

    formatDate(date) {
      if (!date) return "";
      const formattedDate = new Date(date);
      return formattedDate.toISOString().split('T')[0];
    },

    async MyFinishedAuctionItem(auctionItemId) {
      try {
        let accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          alert('로그인 후 다시 시도해주세요.');
          this.goToLoginPage();
          return;
        }
        const response = await axios({
          method: 'get',
          url: `https://api.dcns-wantit.shop/v1/auction-items/${auctionItemId}/finished`,
          headers: {
            'Authorization': accessToken
          }
        });
        this.item = response.data.data;
        console.log('response.data.data :', response.data.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
  },
  mounted() {
    this.MyFinishedAuctionItem(this.$route.params.id);
  },
};
</script>

<style>
body {
  margin: 0;
}

#title {
  margin-top: 100px;
  padding: 0;
}

.finishedDetail_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
}

.finishedDetail_image {
  display: block;
  width: 30%;
  height: 30vh;
  object-fit: cover;
  margin: 10px 10px 10px 10px;
}

.finishedDetail_line {
  display: block;
  width: 50%;
  border: 0.5px solid #000;
}

.finishedDetail_title {
  display: block;
  text-align: center;
  margin: 30px auto 5px auto;
  padding: 20px;
  width: 30%;
  height: auto;
  border-radius: 50px;
}

.finishedDetail_description {
  display: block;
  text-align: center;
  margin: 20px auto;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
  height: auto;
}

.finishedDetail_description p {
  margin: 0px 0;
}
</style>
