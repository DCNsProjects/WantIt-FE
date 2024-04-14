<template>
  <div class="transaction-history">
    <div class="filter-bar">
      <div class="col-md-5">
        <label for="country" class="form-label" style="margin-left: 60px;">거래 유형</label>
        <select class="form-select" id="country" required="">
          <option value="">전체</option>
          <option>충전</option>
          <option>출금</option>
          <option>낙찰</option>
        </select>
      </div>

      <div class="col-md-1" style="margin: 8px">
        <label for="country" class="form-label"></label>
        <select class="form-select" id="country" required="">
          <option value="">최신순</option>
          <option>과거순</option>
        </select>
      </div>

    </div>
    <div class="transaction-list">
      <div
        v-for="i in 7"
        :key="i"
        class="transaction-item"
        style="margin-left: 10%; margin-right: 10%; margin-top: 10%"
      >
        <div class="date">{{ 생성날짜 }}</div>
        <div class="details gap-3">
          <div class="hstack gap-3">
            <div class="description">{{ 상세내역 }}</div>
            <div class="withdraw">{{ 상태 }}</div>
            <div class="amount">{{ 포인트 }} points</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      생성날짜: "2024-04-12",
      상세내역: "경매 낙찰",
      상태: "출금",
      포인트: 1000000,
    };
  },
  components: {},
};
</script>

<style scoped>
.history {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.filter-bar {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
.transaction-list {
  margin-top: 20px;
}
.transaction-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.date {
  font-weight: bold;
  margin-right: 20px;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.amount {
  font-weight: bold;
}
</style>
