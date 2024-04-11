<template>
    <div class="container my-5">
        <div class="p-5 text-center bg-body-tertiary rounded-5">
            <div class="row g-5">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/shoe.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        신발
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/watch.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        시계
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/limited.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        리미티드 에디션
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/collab.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        콜라보레이션
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/figure.jpg" class="img-fluid" style="margin-top: 30px">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        피규어
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/jewel.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        쥬얼리
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/picture.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        예술품
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <a href="#" class="card-img">
                                <img src="../assets/images/entique.jpg" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        엔티크
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainCategories'
}
</script>

<style scoped>
@font-face {
    font-family: 'jua';
    src: url('../assets/fonts/BMJUA_ttf.ttf') format('truetype');
}

.card {
    border: none;
    border-radius: 25px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 275px;
    height: 175px;
    overflow: hidden;
}

.card-img img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card-footer {
    margin-top: 5px;
    margin-left: 15px;
    font-family: 'jua';
}

.bg-body-tertiary {
    background-color: #f7eefa !important;
}
</style>
