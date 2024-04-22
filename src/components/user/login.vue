<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <div class="custom-form2">
        <h1 class="h3 mb-3 fw-normal">로그인</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">이메일 주소</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">비밀번호</label>
        </div>

        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            자동 로그인
          </label>
        </div>
        <div>
          <button class="btn btn-primary w-100 py-2 sign-in-button" type="submit">로그인</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: 'App'
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