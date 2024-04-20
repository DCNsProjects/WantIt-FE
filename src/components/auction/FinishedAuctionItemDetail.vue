<template>
    <div class="finishedDetail_container">

        <div class="finishedDetail_title">
            <h5>무제 </h5>
        </div>

        <img class="finishedDetail_image"
            src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
            alt="...">
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
            this.$router.push('/finished-auction');
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
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
}

.finishedDetail_image {
    display: block;
    width: 30%;
    height: 30vh;
    object-fit: cover;
    margin: 10px 10px 10px 10px;
}

.finishedDetail_line {
    display: block;
    width: 50%;
    border: 0.5px solid #000;
}

.finishedDetail_title {
    display: block;
    text-align: center;
    margin: 30px auto 5px auto;
    padding: 20px;
    width: 30%;
    height: auto;
    border-radius: 50px;

}

.finishedDetail_description {
    display: block;
    text-align: center;
    margin: 20px auto;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
    height: auto;
}

.finishedDetail_description p {
    margin: 0px 0;
}
</style>