<template>
    <div class="fixed-header">
        <nav class="py-1 bg-body-tertiary border-bottom fixed-header">
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto align-items-center">
                    <router-link to="/">
                        <span class="wantit fs-2"><i class="bi-1 bi-wordpress"></i>
                            원트잇</span>
                    </router-link>
                    <li class="nav-item dropdown hover-dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Auctions
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" @click="inProgress">진행중인 경매</a></li>
                            <li><a class="dropdown-item" @click="scheduledAuction">예정된 경매</a></li>
                            <li><a class="dropdown-item" @click="finishedAuction">종료된 경매</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown hover-dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Point
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" @click="point">포인트 관리</a></li>
                            <li><a class="dropdown-item" @click="pointLog">포인트 내역</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown hover-dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            My Page
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" @click="myAuctions" >나의 경매품</a></li>
                            <li><a class="dropdown-item" @click="addProductPage">경매품 등록</a></li>
                            <li><a class="dropdown-item">낙찰 내역</a></li>
                            <li><a class="dropdown-item" @click="likedAuction">관심 경매</a></li>
                            <li><a class="dropdown-item" @click="updateUser">내 정보</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav align-items-center">
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 search-bar" role="search"><i class="bi bi-search"></i>
                        <input type="search" class="form-control" placeholder="상품 이름으로 검색" aria-label="Search">
                    </form>
                    <li class="nav-item"><a class="nav-link link-body-emphasis px-2" @click="login">로그인</a></li>
                    <li class="nav-item"><a class="nav-link link-body-emphasis px-2" @click="signUp">회원가입</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'vueHeader',

    methods: {

        homePage() {
            this.$router.push('/');
        },

        addProductPage() {
            this.$router.push('/add-Product');
        },

        myAuctions() {
            this.$router.push('/my-Auctions');
        },

        point() {
            this.$router.push('/point');
        },

        pointLog() {
            this.$router.push('/point-Log');
        },

        inProgress() {
            this.$router.push('/in-Progress');
        },

        login() {
            this.$router.push('/login');
        },

        signUp() {
            this.$router.push('/sign-Up');
        },

        finishedAuction() {
            this.$router.push('/finished-auctions');
        },

        likedAuction() {
            this.$router.push('/liked-Auction');
        },

        updateUser() {
            this.$router.push('/update-User');
        },

        scheduledAuction() {
            this.$router.push('/scheduled-Auction');
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'nngt';
    src: url('../../assets/fonts/NanumGothic.ttf') format('truetype');
}

@font-face {
    font-family: 'BM';
    src: url('../../assets/fonts/BMHANNAPro.ttf') format('truetype');
}

a {
    text-decoration: none;
}

.hover-dropdown:hover .dropdown-menu {
    display: block;
}

.hover-dropdown .dropdown-toggle::after {
    display: none;
}

.dropdown-toggle {
    color: black;
}

.nav-item {
    padding: 0 3px;
    font-size: 1.2rem;
    font-family: 'BM';
    cursor: pointer;
}

.fa-brands {
    color: #ccc0f6;
}

.wantit {
    font-family: 'BM';
    margin-right: 20px;
    color: black;
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.header {
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.search-bar {
    width: 220px;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: 20px;
}

.form-control {
    border-color: #ccc0f6;
}

.bi {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.3rem;
}

.dropdown-item {
    cursor: pointer;
}
</style>