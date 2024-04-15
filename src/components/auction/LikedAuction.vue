<template>
    <div>
  
      <div class="page_title">
        <h2 class="page_title">내가 찜한 경매</h2>
      </div>
  
      <div class="items" style="margin-bottom: 40px;">
        <article class="auctionItem"  v-for="(item, index) in items" :key="index">
  <!--          <a href="/auction/live/892">-->
              <figure class="thumbnail">
                <img src="https://www.seoulauction.com/nas_img//front/main0892/7ce0281b-8928-4ff5-8857-dced87a87fa6.jpg" width="500" height="500">
              </figure>
  <!--          </a>-->
            <div class="auction_info">
              <h3 class="title">제178회 미술품 경매</h3>
              <div class="description">
                <dl>
                  <dt>오픈일</dt>
                  <dd>04/10(수)</dd>
                </dl>
                <dl>
                  <dt>경매일</dt>
                  <dd>04/23(화) 16:00 KST</dd>
                </dl>
                <button>상세보기</button>
              </div>
            </div>
  
          <div class="likes">
            <button type="button" class="btn btn-secondary btn-lg">♥</button>
          </div>
  
  
  
        </article>
      </div>
  
  
  
    </div>
  </template>
  <script>
  
  export default {
    name: 'App',
    data() {
      return {
        items: [1, 2, 3]
      }
    },
  
    methods: {
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
  
  .items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%; /* 추가: 페이지의 80%만 차지하도록 설정 */
    margin: 0 auto; /* 추가: 가로 방향으로 중앙에 배치 */
  }
  
  .auctionItem {
    display: flex;
    position: relative;
    justify-content: flex-start; /* 수정: 요소들이 왼쪽에서부터 시작하도록 설정 */
    align-items: center;
    /* 경계선 추가 */
    border-bottom: 1px solid #ddd; /* 1px 두께의 더 옅은 색상의 경계선 */
    padding-bottom: 40px; /* 추가: 경계선을 요소의 상단에서 더 위에 위치시킴 */
    padding-top: 40px; /* 추가: 경계선을 요소의 하단에서 더 아래에 위치시킴 */
  
  }
  
  .auction_info {
    flex: 1;
  }
  .auctionItem > * {
    margin-right: 50px; /* 추가: 오른쪽 마진 설정 */
  }
  .thumbnail {
    margin-left: 0;
    padding-left: 0;
  }
  
  .thumbnail img {
    width: 200px;
    height: 200px;
  }
  
  .page_title {
    width: 100%;
    max-width: 1320px;
    color: rgb(17, 17, 17);
    position: relative;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    margin: 30px 0 20px 150px;  /* top right bottom left  */
  }
  
  
  .title {
    font-size: 24px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    margin-top: 10px;
  }
  
  .description {
    color: rgb(85, 85, 85);
    flex: 1;
    margin-left: 100px;
    width: 300px;
  }
  
  .description button {
    margin-top: 20px;
    width: 170px;
    height: 48px;
    background: transparent;
    border: 1px solid rgb(235, 235, 235);
    color: rgb(85, 85, 85);
    border-radius: 2px;
    box-sizing: border-box;
  }
  
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-right: 5px;
  }
  
  li button {
    margin: 0;
    padding: 0;
  }
  </style>