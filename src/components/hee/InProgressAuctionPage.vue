<template>
  <div class="filter-bar">
    <form class="d-flex" role="search" style="margin-right: 30px; margin-top: 30px">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style="width: 500px; height: 40px"
      />
      <button class="btn btn-outline-secondary" type="submit" style="height: 40px">
        Search
      </button>
    </form>

    <div class="col-md-1" style="margin: 8px">
      <label for="country" class="form-label"></label>
      <select class="form-select" id="country" required="">
        <option value="">최신순</option>
        <option>과거순</option>
      </select>
    </div>
  </div>

  <div v-for="i in 7" :key="i" class="card">
    <div class="card-body">
      <div class="split-screen">
        <div class="left">
          <h4 style="margin-left: -10%; margin-bottom: 30px">{{ 경매품 }}</h4>
          <div style="margin-left: -10%">현재 최고가 {{ 실시간최고가 }}원</div>
          <div style="margin-left: -10%; margin-top: 10px">경매 마감일 {{ 마감일 }}</div>
          <button
            type="button"
            class="btn btn-outline-secondary"
            style="margin-left: -10%; margin-top: 20px; width: 150px"
            @click="gotobid"
          >
            상세보기
          </button>
        </div>
        <div class="v-line"></div>
        <div class="right">
          <div class="product-img">
            <img alt="Vue logo" src="./../assets/logo.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    gotobid() {
      this.$router.push("/bids");
    },
  },
  data() {
    return {
      경매품: "골동품 춘식이",
      실시간최고가: 1000000,
      마감일: "2024-04-12",
    };
  },
  components: {},
};
</script>

<style scoped>
.filter-bar {
  margin-left: 70px;
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
.split-screen {
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  flex: 1;
  padding: 1em;
}
.product-img {
  margin-left: 40%;
  margin-bottom: 25%;
}
.card {
  padding: 30px;
  margin: 8%;
  margin-bottom: 80px;
}
.product-img {
  width: 60px;
  height: 60px;
}
</style>
