<template>
  <div class="black-bg" v-if="modalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>회원가입 완료!</p>
      <button type="button" class="btn btn-outline-secondary" @click="goToLoginPage">
        로그인 페이지로 이동
      </button>
      <div class="button-right">
        <button type="button" class="btn btn-secondary btn-sm" @click="modalBox = false">
          확인
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="title">
      <h2>Signup</h2>
    </div>
    <div class="custom-form4">
      <div class="mb-3 inputElement">
        <label for="email" class="form-label">Email </label>
        <div class="input-group mb-3">
          <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              v-model="email"
          />
        </div>
        <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="sendVerificationEmail(); showVerification = true">
          이메일 인증하기
        </button>
      </div>

      <div class="input-group input-group-sm mb-3" v-if="showVerification">
        <input
            type="text"
            class="form-control email-verif"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            id="formGroupExampleInput2"
            placeholder="인증코드 입력"
            v-model="confirmationCode"
        />
        <div class="input-group-append">
          <button type="button" class="btn btn-secondary btn-sm" @click="confirmEmail">
            확인
          </button>
        </div>
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Password"
            v-model="password"
        />
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Username</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="실명"
            v-model="username"
        />
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Nickname</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="별명"
            v-model="nickname"
        />
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">PhoneNumber</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="010-0000-0000"
            v-model="phoneNumber"
        />
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Address</label>
        <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="주소"
            v-model="address"
        />
        <button
            type="button"
            class="btn btn-secondary btn-lg signup-button"
            @click="openModalAndSignUp">
          회원가입 하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      modalBox: false,
      showVerification: false,

      email: '',
      password: '',
      username: '',
      nickname: '',
      phoneNumber: '',
      address: '',
      role: 'USER',
      confirmationCode: ''
    };
  },

  methods: {
    async sendVerificationEmail() {
      try {
        const response = await axios.post("http://localhost:8080/v1/users/emails/authcode", {
          email: this.email
        });
        console.log('Email 인증 요청:', response);
        alert('이메일로 인증 코드가 전송되었습니다.');
      } catch (error) {
        console.error('Email 인증 요청 실패:', error);
        alert('이메일 인증 요청을 실패했습니다. 다시 시도해주세요.');
      }
    },

    async confirmEmail() {
      try {
        const response = await axios.post("http://localhost:8080/v1/users/emails/authcode/verify", {
          code: this.confirmationCode,
          email: this.email
        });

        console.log('인증 코드 :', this.confirmationCode);

        if (this.code === '') {
          alert("먼저 인증 코드를 입력하세요.");
          return
        }
        if (response.data.data) {  // 서버에서 true를 반환한 경우
          this.emailVerified = true;
          alert("인증되었습니다.");
        } else {  // 서버에서 false를 반환한 경우
          this.emailVerified = false;
          alert("인증에 실패했습니다.");
        }
      } catch (error) {
        console.error('Email 인증 요청 실패:', error);
        alert('이메일 인증 요청을 실패했습니다. 다시 시도해주세요.');
      }
    },



    goToLoginPage() {
      this.$router.push("/login");
    },

    openModalAndSignUp() {
      this.openModal();
      this.signUp();
    },

    openModal() {
      this.modalBox = true;
    },
    async signUp()
    {
      const instance = axios.create({
        baseURL: "http://localhost:8080",
      });

      try {
        await instance.post("/v1/users/signup", {
          email: this.email,
          password: this.password,
          username: this.username,
          nickname: this.nickname,
          phoneNumber: this.phoneNumber,
          address: this.address,
          role: this.role
        });
      }catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert('회원가입 실패했습니다. 다시 시도해주세요.');
        }
      }
    }
    ,
  },
  components: {},
};
</script>

<style scoped>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.email-verif {
  width: 50%;
}

.title {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

.custom-form4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 17px;
  width: 80%;
  margin-left: 250px;
  margin-right: auto;
}

.custom-form4 * {
  width: 70%;
}

.signup-button {
  margin-top: 20px;
  background-color: #ccc0f6 !important;
  border: none !important;
}

.btn-sm {
  margin-bottom: 10px;
}

.input-group-append button {
  margin-left: 10px !important;
  height: 100% !important;
  width: 55px !important;
}

.black-bg {
  background-color: rgba(0, 0, 0, 0.7); /* Black background with 70% opacity */
  position: fixed; /* Fixed position */
  z-index: 1000; /* Sit on top */
  left: 0; /* Full width */
  top: 0; /* Full height */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  display: flex; /* Enable flex */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.white-bg {
  width: 20%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  position: fixed;
}

.mb-3.inputElement {
  z-index: 999;
}
</style>
