<template>
  <div class="black-bg" v-if="modalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>회원가입 완료!</p>
      <button type="button" class="btn btn-outline-secondary" @click="goToLoginPage"> 로그인 페이지로 이동</button>
      <div class="button-right">
        <button type="button" class="btn btn-secondary btn-sm" @click="modalBox = false">확인</button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="title">
      <h2> Signup </h2>
    </div>
    <div class="custom-form4">
      <div class="mb-3 inputElement">
        <label for="email" class="form-label">Email</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email">
        </div>
        <button type="button" class="btn btn-secondary btn-sm" @click="showVerification = true">이메일 인증하기</button>
      </div>

      <div class="input-group input-group-sm mb-3" v-if="showVerification">
        <input type="text" class="form-control email-verif" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm" id="formGroupExampleInput2" placeholder="인증코드 입력">
        <div class="input-group-append">
          <button type="button" class="btn btn-secondary btn-sm" @click="confirmEmail">확인</button>
        </div>



      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password">
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Username</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="실명">
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Nickname</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="별명">
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">PhoneNumber</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="010-0000-0000">
      </div>
      <div class="mb-3 inputElement">
        <label for="formGroupExampleInput2" class="form-label">Address</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="주소">
        <button type="button" class="btn btn-secondary btn-lg signup-button" @click="openModal">회원가입 하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      modalBox: false,
      showVerification: false,
    }
  },

  methods: {
    sendEmail() {

    },
    confirmEmail() {
      if (this.confirmationCode === '') {
        alert('먼저 인증 코드를 입력하세요.');
        return;
      }
      if (this.confirmationCode === '서버에서 받은 인증코드') {
        alert('인증되었습니다.');
      } else {
        alert('인증에 실패했습니다.');
      }
    },

    goToLoginPage() {
      this.$router.push('/login');
    },
    openModal() {
      this.modalBox = true;
    },
  },
  components: {}
}
</script>

<style scoped>
body {
  margin: 0
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
  z-index: 1000;
}

.mb-3.inputElement {
  z-index: 999;
}
</style>