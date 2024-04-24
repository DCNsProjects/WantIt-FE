<template>
  <div class="container">
    <div class="transaction-history">
      <div class="filter-bar">
        <div class="col-md-5">
          <label for="country" class="form-label">거래 유형</label>
          <select class="form-select" id="country" required="" @change="changeFilter">
            <option value="">전체</option>
            <option value="charge">충전</option>
            <option value="withdraw">출금</option>
            <option value="bid">낙찰</option>
          </select>
        </div>
      </div>
      <div class="transaction-list">
        <div v-for="item in items" :key="item.id" class="transaction-item">
          <div class="date">{{ item.createdAt }}</div>
          <div class="details gap-3">
            <div class="hstack gap-3">
              <div class="description">{{ item.details }}</div>
              <div class="amount">{{ formattedBid(item.changedPoint) }} points</div>
            </div>
          </div>
        </div>
      </div>
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
      items: [],
      생성날짜: "2024-04-12",
      상세내역: "경매 낙찰",
      상태: "출금",
      포인트: 1000000,
      currentPage: 1,
      totalPage: 1,
    };
  },
  created() {
    console.log();
    this.getPointLog();
  },
  methods: {
    async getPointLog(page = 1) {
      let accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인 후 다시 시도해주세요.");
      }
      axios
        .get(`http://localhost:8080/v1/points/log?page=${page}&size=10`, {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
          headers: {
            Authorization: accessToken,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          this.items = result.data.pointLogResponseDtoList;
          this.currentPage = page;
          this.totalPage = result.data.totalPage;
        });
    },
    async changeFilter(event, page = 1) {
      let accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        alert("로그인 후 다시 시도해주세요.");
      }
      const selectFilter = event.target.value;
      let apiUrl = "";
      switch (selectFilter) {
        case "charge":
          apiUrl = `http://localhost:8080/v1/points/log?page=${page}&size=10&status=CHARGE`;
          break;
        case "withdraw":
          apiUrl = `http://localhost:8080/v1/points/log?page=${page}&size=10&status=WITHDRAWAL`;
          break;
        case "bid":
          apiUrl = `http://localhost:8080/v1/points/log?page=${page}&size=10&status=SUCCESSFUL_BID`;
          break;
        default:
          apiUrl = `http://localhost:8080/v1/points/log?page=${page}&size=10`;
      }
      axios
        .get(apiUrl, {
          proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          },
          headers: {
            Authorization: accessToken,
          },
        })
        .then((response) => {
          console.log(response);
          const result = response.data;
          this.items = result.data.pointLogResponseDtoList;
          this.currentPage = page;
          this.totalPage = result.data.totalPage;
        });
    },
    formattedBid(price) {
      return price !== undefined ? price.toLocaleString() : "0";
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.getPointLog(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.getPointLog(this.currentPage + 1);
      }
    },
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

.head {
  display: flex;
  justify-content: center;
}

.transaction-list {
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}

.transaction-item {
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
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

.form-label {
  font-weight: bold;
  margin-top: 10px;
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
