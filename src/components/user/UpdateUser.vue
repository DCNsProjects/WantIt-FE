<template>
  <div class="black-bg" v-if="modalBox == true">
    <div class="white-bg">
      <h4></h4>
      <p>정보가 수정되었습니다.</p><br>
      <div class="button-right">
        <button type="button" class="btn btn-secondary btn-sm" @click="modalBox = false">확인</button>
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
        <br><label for="formGroupExampleInput2" class="form-label">현재 닉네임 {{ currentNickname }} </label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="별명">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">전화번호</label>
        <br><label for="formGroupExampleInput2" class="form-label">현재 전화번호 {{ currentPhoneNumber }}</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="010-0000-0000">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">주소</label>
        <br><label for="formGroupExampleInput2" class="form-label">현재 주소 {{ currentAddress }} </label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="주소">
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-secondary btn-lg" @click="openModal">수정하기</button>
        <br><button type="button" class="btn btn-secondary btn-lg" @click="updatePassword">비밀번호 수정하기</button>
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
    }
  },

  methods: {
    updatePassword() {
      this.$router.push('/update-password');
    },
    openModal() {
      this.modalBox = true;
    },
  },
  components: {

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