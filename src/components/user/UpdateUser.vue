<template>
  <div class="black-bg" v-if="modalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>정보가 수정되었습니다.</p><br>
      <div class="button-right">
        <button type="button" class="btn btn-secondary btn-sm" @click="close">확인</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="title">
      <h2> My Profile </h2>
    </div>
    <div class="custom-form3">
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">닉네임</label>
        <br><label for="formGroupExampleInput2" class="form-label">현재 닉네임 : {{
          currentNickname
        }} </label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="별명"
               v-model="nickname">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">전화번호</label>
        <br><label for="formGroupExampleInput2" class="form-label">현재 전화번호 : {{
          currentPhoneNumber
        }}</label>
        <input type="text" class="form-control" id="formGroupExampleInput2"
               placeholder="010-0000-0000" v-model="phoneNumber">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">주소</label>
        <br><label for="formGroupExampleInput2" class="form-label">현재 주소 : {{
          currentAddress
        }} </label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="주소"
               v-model="address">
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-secondary btn-lg" @click="updateInfo">수정하기</button>
        <br>
        <button type="button" class="btn btn-secondary btn-lg" @click="updatePassword">비밀번호 수정하기
        </button>
      </div>
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
      nickname: '',
      phoneNumber: '',
      address: '',
      currentNickname: '',
      currentPhoneNumber: '',
      currentAddress: '',

    }
  },

  methods: {
    goToLoginPage() {
      this.$router.push('/login');
    },

    getNewAccessToken(errorResponse) {
      localStorage.removeItem('accessToken');
      let newAccessToken = errorResponse.headers.authorization;
      localStorage.setItem('accessToken', newAccessToken);
      this.fetchUserInfo();
    },

    async fetchUserInfo() {
      try {
        let accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          alert('로그인 후 다시 시도해주세요.');
          this.goToLoginPage();
          return;
        }
        const response = await axios({
          method: 'get',
          url: 'https://api.dcns-wantit.shop/v1/users',
          headers: {
            'Authorization': accessToken
          }
        });

        const userData = response.data.data;
        this.currentNickname = userData.nickname;
        this.currentPhoneNumber = userData.phoneNumber;
        this.currentAddress = userData.address;
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            await this.getNewAccessToken(error.response);
          } else {
            console.error('Error : ', error);
            alert('다시 로그인해주세요');
          }
        }
      }
    },

    async updateInfo() {
      let accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('로그인 후 다시 시도해주세요.');
        this.goToLoginPage();
        return;
      }
      try {
        await axios({
          method: 'put',
          url: 'https://api.dcns-wantit.shop/v1/users',
          data: {
            nickname: this.nickname,
            phoneNumber: this.phoneNumber,
            address: this.address,
          },
          headers: {
            'Authorization': accessToken
          }
        });

        this.modalBox = true;
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert('정보 변경에 실패했습니다. 다시 시도해주세요.');
        }
      }
    },

    updatePassword() {
      this.$router.push('/update-password');
    },

    close() {
      this.modalBox = false;
      this.fetchUserInfo();
    },
  },

  components: {},

  mounted() {
    this.fetchUserInfo();
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

.title {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

.custom-form3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.custom-form3 * {
  width: 100%;
}

.btn {
  background-color: #ccc0f6 !important;
  border: none !important;
  color: black !important;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.container {
  z-index: 999; /* Lower z-index */
  position: relative; /* To make z-index work */
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

.button-right {
  text-align: right;
}
</style>
