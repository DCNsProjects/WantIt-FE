<template>
    <div class="black-bg" v-if="modalBox == true">
      <div class="white-bg">
        <h4></h4>
        <p>비밀번호가 수정되었습니다.</p><br>
        <button type="button" class="btn btn-outline-secondary" @click="goToLoginPage"> 로그인 페이지로 이동</button>
        <div class="button-right">
          <button type="button" class="btn btn-secondary btn-sm" @click="modalBox = false">확인</button>
        </div>
      </div>
    </div>
  
  
    <div class="title">
      <h2> My Password </h2>
    </div>
    <div class="custom-form3">
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Password</label>
        <br><label for="formGroupExampleInput2" class="form-label">Current Password
        {{ currentPassword }} </label>
        <br>
        <br><label for="formGroupExampleInput2" class="form-label">Check Password</label>
        <input type="text" class="form-control" id="formGroupExampleInput2"
               placeholder="바꾸려는 비밀번호를 입력해주세요">
        <br><label for="formGroupExampleInput2" class="form-label">Check Password</label>
        <input type="text" class="form-control" id="formGroupExampleInput2"
               placeholder="비밀번호를 한번 더 입력해 주세요">
      </div>
  
      <div class="mb-3">
        <button type="button" class="btn btn-secondary btn-lg signup-button" @click="openModal">수정하기
        </button>
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
    row-gap: 10px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .custom-form3 * {
    width: 50%;
  }
  
  .signup-button {
    background-color: #ccc0f6 !important;
    border: none !important;
    color: black !important;
    width: 100%;
  }
  
  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
  }
  
  .white-bg {
    width: 20%;
    background: white;
    border-radius: 8px;
    padding: 20px;
    top: 10%;
    left: 50%;
    transform: translate(200%, 0);
    text-align: center;
  }
  
  .button-right {
    text-align: right;
  }
  </style>