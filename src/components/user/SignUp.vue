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
  <div class="title">
    <h2> Signup </h2>
  </div>
  <div class="custom-form3">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Email</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Password</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Username</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="실명">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Nickname</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="별명">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">PhoneNumber</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="010-0000-0000">
    </div>
    <div class="mb-3"><label for="formGroupExampleInput2" class="form-label">Address</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="주소">
      <button type="button" class="btn btn-secondary btn-lg signup-button" @click="openModal">회원가입 하기</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      modalBox: false,
    }
  },

  methods: {
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

.title {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

.custom-form3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 17px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.custom-form3 * {
  width: 50%;
}

.signup-button {
  margin-top: 20px;
  background-color: #ccc0f6 !important;
  border: none !important;
}
</style>