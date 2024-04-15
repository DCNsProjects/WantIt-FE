<template>
    <div class="container">
        <div class="card text-center" v-for="item in finishedItems" :key="item.id">
            <div class="card-header">
                <h5 class="card-title">{{ item.auction }}</h5>
            </div>
            <div class="card-body">
                <img src="https://www.seoulauction.com/nas_img/front/online0888/thum/d1aa1685-65ce-48cf-ae11-9a0d8f22f700.jpg"
                    class="card-img-top" alt="items">
                <p class="card-text">{{ item.description }}</p>
                <p class="card-text">경매 시작 금액 : {{ formattedBid(item.currentBidPrice) }}원</p>
                <a href="#" class="btn btn-primary">상세보기</a>
            </div>
            <div class="card-footer text-body-secondary">
                <p class="card-text">경매 시작 일자 : {{ item.endDate }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScheduledAuction',

    methods: {
        formattedBid(finishedAuction) {
            return finishedAuction.toLocaleString();
        }
    },

    data() {
        return {
            finishedItems: [
                {
                    id: 1,
                    auction: "골동품 춘식이",
                    description: "춘식이가 살아있는 골동품",
                    currentBidPrice: 1000000,
                    endDate: "2024-04-17",
                },
                {
                    id: 2,
                    auction: "사진작품",
                    description: "이건 뭘까요?",
                    currentBidPrice: 2350000,
                    endDate: "2024-04-19",
                },
            ]
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'nngt';
    src: url('../../assets/fonts/NanumGothic.ttf') format('truetype');
}

* {
    font-family: 'nngt';
}

.container {
    margin-top: 100px;
    width: 50%;
}

.card-img-top {
    width: 50%;
    max-height: 500px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.card-title {
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
}

.btn {
    background-color: #ccc0f6;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: black;
}

.card {
    margin-top: 50px;
}

.card-text {
    font-size: 15px;
}
</style>