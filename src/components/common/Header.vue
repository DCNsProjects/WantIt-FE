<template>
    <nav class="py-1 bg-body-tertiary border-bottom">
        <div class="container d-flex flex-wrap">
            <ul class="nav me-auto align-items-center">
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2 active" aria-current="page"><i
                            class="fas fa-home"></i> 홈</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i class="fas fa-gavel"></i>
                        진행중인 경매품</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
                            class="fa-solid fa-calendar"></i> 예정된 경매품</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
                            class="fa-solid fa-splotch"></i> 경매품 등록</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
                            class="fa-solid fa-stamp"></i> 입찰중인 경매</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
                            class="fa-solid fa-floppy-disk"></i> 내 정보</a></li>
            </ul>
            <ul class="nav">
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">로그인</a></li>
                <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">회원가입</a></li>
            </ul>
        </div>
    </nav>
    <header class="py-2 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center align-items-center">
            <a href="/"
                class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32">
                    <use xlink:href="#bootstrap"></use>
                </svg>
                <span class="wantit fs-2"><i class="fa-brands fa-webflow"></i> 원트잇</span>
            </a>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                <input type="search" class="form-control" placeholder="상품 이름으로 검색" aria-label="Search">
            </form>
        </div>
    </header>
</template>

<script>
export default {
    name: 'vueHeader'
}
</script>

<style scoped>
@font-face {
    font-family: 'nngt';
    src: url('../assets/fonts/NanumGothic.ttf') format('truetype');
}

@font-face {
    font-family: 'BM';
    src: url('../assets/fonts/BMHANNAPro.ttf') format('truetype');
}

.nav-item {
    padding: 0 3px;
    font-size: 1.0rem;
    font-family: 'nngt';
}

.form-control {
    border-color: #ccc0f6;
}

.fa-brands {
    color: #ccc0f6;
}

.wantit {
    font-family: 'BM';
}
</style>