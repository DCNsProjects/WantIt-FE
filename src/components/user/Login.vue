<template>

    <main class="form-signin w-100 m-auto">
  
      <form>
        <div class="custom-form2">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
  
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
  
        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
          <div>
        <button class="btn btn-primary w-100 py-2 sign-in-button" type="submit">sign in</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2024</p>
          </div>
        </div>
      </form>
  
    </main>
  </template>
  
  
  
  <script>
  
  export default {
    name: 'App',
    data(){
      return{
  
      }
    },
  
    components: {
  
    }
  }
  </script>
  
  <style scoped>
  body{
    margin :0
  }
  div {
    box-sizing: border-box;
  }
  
  .custom-form2{
    width: 400px;
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .custom-form * {
    width: 100%;
  }
  .sign-in-button{
    background-color: #ccc0f6 !important;
    border: none !important;
    color: black !important;
  }
  </style>