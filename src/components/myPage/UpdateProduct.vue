<template>
    <div class="container my-5">
        <div class="p-5 text-center bg-body-tertiary rounded-4 main">
            <h1 class="text-body-emphasis maintext"><i class="bi bi-box-fill"></i></h1>
            <p class="lead">
                ❗ 본 페이지에서 경매품을 수정할 수 있습니다. ❗<br>
                ❗ 판매 금지 품목은 경고 없이 삭제될 수 있습니다. ❗<br>
                ❗ 경매 시작일은 현재 날짜로부터 최소 1일 이후부터 설정 가능합니다. ❗<br>
                ❗ 경매 종료는 시작당일 오후 7시에 자동으로 종료됩니다. ❗<br>
            </p>
        </div>
    </div>
    <div class="container form">
        <form @submit.prevent="updateProduct">
            <div class="form-group">
                <label for="productName" class="form-label">상품명</label>
                <input type="text" id="productName" v-model="productName" required class="form-control">
            </div>
            <div class="form-group">
                <label for="productDescription" class="form-label">상품 설명</label>
                <textarea id="productDescription" v-model="productDescription" required class="form-control"></textarea>
            </div>
            <div class="form-group">
                <label for="auctionStartPrice" class="form-label">경매 시작금액</label>
                <input type="number" id="auctionStartPrice" v-model="auctionStartPrice" required class="form-control">
            </div>
            <div class="form-group">
                <label for="auctionStartDate" class="form-label">경매 시작일</label>
                <input type="date" id="auctionStartDate" v-model="auctionStartDate" required class="form-control"
                    :min="today">
            </div>
            <div class="form-group">
                <label for="productImage" class="form-label">상품 이미지</label>
                <input type="file" id="productImage" @change="handleImageUpload" class="form-control">
            </div>

            <button type="submit" class="btn btn-primary">수 정 하 기</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productName: '',
            productDescription: '',
            auctionStartDate: '',
            auctionStartPrice: 0,
            productImage: '',
            today: this.getToday()
        };
    },
    methods: {
        updateProduct() {
        },

        handleImageUpload(event) {
            const file = event.target.file;
            const reader = new FileReader();

            reader.onload = (e) => {
                this.productImage = e.target.result;
            };

            reader.readAsDataURL(file); // 파일 내용 읽기
        },

        getToday() {
            let today = new Date();
            let dd = String(today.getDate() + 1).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            return today;
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'nngt';
    src: url('../../assets/fonts/NanumGothic.ttf') format('truetype');
}

@font-face {
    font-family: 'jua';
    src: url('../../assets/fonts/BMJUA_ttf.ttf') format('truetype');
}

* {
    font-family: 'nngt';
    font-size: 20px;
}

.form {
    width: 40%;
    margin: 0 auto;
}

.maintext {
    font-size: 50px;
    font-weight: bold;
    color: #ccc0f6;
    font-family: jua;
}

.main {
    margin-top: 110px;
    background-color: #eeebfa !important;
}

.bi {
    font-size: 100px;
    color: #6342d8;
}

.form-control {
    border-radius: 15px;
    border-color: #ccc0f6;
}

.form-label {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-top: 10px;
    margin-bottom: 3px;
}

.btn {
    margin-top: 40px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 200px;
    height: 50px;
    color: rgb(0, 0, 0);
    font-size: larger;
    font-family: jua;
    background-color: #ccc0f6;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.form-group {
    margin-bottom: 20px;
}
</style>