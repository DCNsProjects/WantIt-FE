<template>
  <div class="container">
    <div class="row" v-for="(row, rowIndex) in 3" :key="'row' + rowIndex">
      <div class="items finishedAuctionItems" style="margin-bottom: 40px;">
        <div class="finishedAuctionCard" style="width: 18rem;" v-for="(item, index) in items" :key="'card' + index" @click="detail">
          <img src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
            class="card-img-top" alt="...">
          <div class="finishedAuctionCardBody">
            <p class="card-text">장덕철 작가님 그림</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      items: Array(3).fill()
    }
  },

  methods: {
    detail() {
      this.$router.push('/finished-detail');
    }
  }
}
</script>

<style scoped>
body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.finishedAuctionItems {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center !important;
}

.finishedAuctionCard {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  width: calc(33.33%);
  height: 200px !important;
  margin: 0.5rem 30px 0 30px;
  cursor: pointer;
}

.finishedAuctionCard img {
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
  max-height: 120px !important;
  object-fit: cover !important;
}

.finishedAuctionCardBody {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  height: 50px !important;
  overflow: auto;
  text-align: center;
}

.container {
  margin-top: 90px;
}
</style>