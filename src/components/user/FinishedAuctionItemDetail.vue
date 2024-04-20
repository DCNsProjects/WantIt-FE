<template>
  <div class="finishedDetail_container">

    <div class="finishedDetail_title">
      <h5>무제 </h5>
    </div>

    <img class="finishedDetail_image" src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg" alt="...">
    <hr class="finishedDetail_line">
    <div class="finishedDetail_description">
      <p>작가 : 장덕철</p>
      <br>
      <p>작품정보</p>
      <p>작품 설명 : acrylic on canvas mounted on wooden tray</p>
      <p>image : 15×19.5cm</p>
      <p>wooden tray : 22×26.6×4(d)cm</p>
      <p>2003</p>
      <p>signed on the upper left</p>
      <p>signed and dated on the reverse</p>
    </div>
    <button type="button" class="btn btn-outline-dark" @click="goToList">닫기</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    goToList() {
      this.$router.push('/finishedItem');
    },
  },
  components: {}
}
</script>

<style>
.finishedDetail_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 수정: 요소들을 컨테이너의 시작 부분(위쪽)으로 정렬 */
  height: 100vh; /* 전체 뷰포트 높이를 차지하도록 설정 */
  width: 100vw; /* 전체 뷰포트 너비를 차지하도록 설정 */
}

.finishedDetail_image {
  display: block; /* 추가: 이미지를 블록 수준 요소로 설정 */
  width: 30%; /* 가로 길이를 20%로 줄임 */
  height: 30vh;
  object-fit: cover;
  margin: 10px 10px 10px 10px; /* 수정: 이미지를 가운데 정렬하고 아래 마진을 줄임 */
}

.finishedDetail_line {
  display: block; /* 추가: 선을 블록 수준 요소로 설정 */
  width: 50%; /* 수정: 선의 너비를 50%로 줄임 */
  border: 0.5px solid #000;
}

.finishedDetail_title{
  display: block; /* 추가: 설명을 블록 수준 요소로 설정 */
  text-align: center;
  margin: 30px auto 5px auto; /* 수정: 설명을 가운데 정렬하고 위아래 마진을 줄임 */
  padding: 20px; /* 추가: 상자 내부의 공간을 만듦 */
  width:30%; /* 추가: 상자의 가로 길이를 이미지보다 길게 설정 */
  height: auto; /* 추가: 상자의 세로 길이를 내용에 맞게 자동으로 설정 */
  border-radius: 50px; /* 추가: 테두리를 동그랗게 만듦 */

}
.finishedDetail_description {
  display: block; /* 추가: 설명을 블록 수준 요소로 설정 */
  text-align: center;
  margin: 20px auto; /* 수정: 설명을 가운데 정렬하고 위아래 마진을 줄임 */
  background-color: #f2f2f2; /* 추가: 배경색을 회색으로 설정 */
  padding: 20px; /* 추가: 상자 내부의 공간을 만듦 */
  width:50%; /* 추가: 상자의 가로 길이를 이미지보다 길게 설정 */
  height: auto; /* 추가: 상자의 세로 길이를 내용에 맞게 자동으로 설정 */
}
.finishedDetail_description p {
  margin: 0px 0; /* 위아래 마진을 5px로 설정 */
}
</style>
