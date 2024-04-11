<template>
    <div class="fixed-header">
        <nav class="py-1 bg-body-tertiary border-bottom fixed-header">
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto align-items-center">
                    <span class="wantit fs-2"><i class="fa-brands fa-webflow"></i>
                        원트잇</span>
                    <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2"><i
                                class="fas fa-gavel"></i>
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
                <ul class="nav align-items-center">
                    <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">로그인</a></li>
                    <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">회원가입</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 search-bar" role="search">
        <input type="search" class="form-control" placeholder="상품 이름으로 검색" aria-label="Search"><i
            class="bi bi-search"></i>
    </form>
</template>

<script>
export default {
    name: 'vueHeader'
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
    margin-right: 30px;
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
    margin-top: 100px;
    width: 500px;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.bi {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.5rem;
}
</style>