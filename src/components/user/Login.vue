<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <div class="custom-form2">
        <div id="loginForm"></div>
        <h1 class="h3 mb-3 fw-normal">로그인</h1>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput"
                 placeholder="name@example.com" v-model="email">
          <label for="floatingInput">이메일 주소</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                 v-model="password">
          <label for="floatingPassword">비밀번호</label>
        </div>
        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me"
                 id="flexCheckDefault">
        </div>
        <div>
          <button type="submit" class="btn btn-primary w-100 py-2 sign-in-button" @click="fnLogin">
            로그인
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',

  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    fnLogin(event) {

      event.preventDefault();

      if (this.email === '') {
        alert('Email을 입력하세요.')
        return
      }

      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      try {
        this.logIn()
      } catch (err) {
        if (err.message.indexOf('Network Error') > -1) {
          alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.')
        } else {
          alert('로그인 정보를 확인할 수 없습니다.')
        }
      }
    },
    async logIn() {
      try {
        localStorage.removeItem('accessToken');
        const response = await axios({
          method: 'post',
          url: 'https://api.dcns-wantit.shop/v1/users/login',
          data: {
            email: this.email,
            password: this.password,
          }
        });
        let accessToken = response.headers.get('Authorization');
        localStorage.setItem('accessToken', accessToken);
        this.$router.push('/');
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
        localStorage.removeItem('accessToken');
      }
    },
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

.custom-form2 {
  width: 400px;
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
}

.custom-form * {
  width: 100%;
}

.sign-in-button {
  background-color: #ccc0f6 !important;
  border: none !important;
  color: black !important;
}

.form-control {
  margin-bottom: 15px;
}

.btn {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  color: black;
}
</style>
