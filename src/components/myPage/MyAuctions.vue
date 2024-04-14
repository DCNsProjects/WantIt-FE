<template>
    <div class="container">
        <h1 class="banner"><i class="bi bi-boxes"></i> My Auctions</h1>
        <div v-for="item in auctionItems" :key="item.id" class="auction-item">
            <img :src="item.image" alt="Auction Item" class="item-image" />
            <div class="item-info">
                <h2 class="title">{{ item.title }}</h2>
                <p class="des">{{ shortDescription(item.description) }}</p>
                <div class="info">
                    <p class="bid">현재 입찰 금액: {{ formattedBid(item.currentBid) }}\</p>
                    <button class="btn btn-primary" type="submit" @click="updatePage">경매 수정</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            auctionItems: [
                {
                    id: 1,
                    title: '아카자 피규어',
                    description: '더 이상 구할 수 없는 귀멸의 칼날 아카자 피규어 입니다. 판매하지 않는 제품이기 때문에 입찰 시작가를 조금 높혔습니다.',
                    image: require('@/assets/images/figure.jpg'),
                    currentBid: 1350000
                },
                {
                    id: 2,
                    title: '크리스찬 디올 x 슈프림 핸드백',
                    description: '크리스찬 디올과 슈프림이 콜라보한 핸드백 입니다.한정판으로 더 이상 구할 수 없습니다.제가 아끼던 것인데 경매를 통해 팔게 되었습니다.사용은 사실상 몇번 한적 없어서 새 제품이나 마찬가지입니다. 가격은 현재 입찰가를 따라가겠습니다. 좋은 가격으로 팔리길 바랍니다. 많은 관심 부탁드립니다.',
                    image: require('@/assets/images/collab.jpg'),
                    currentBid: 27000000
                }
            ]
        };
    },
    methods: {
        formattedBid(auctionItems) {
            return auctionItems.toLocaleString();
        },

        shortDescription(auctionItems) {
            return auctionItems.length > 150 ? auctionItems.slice(0, 150) + '...' : auctionItems;
        },

        updatePage() {
            this.$router.push('/update-product');
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: 'bm';
    src: url('../../assets/fonts/BMHANNAPro.ttf') format('truetype');
}

.container {
    max-width: 800px;
    margin-top: 50px;
    padding: 20px;
}

.auction-item {
    display: flex;
    margin-bottom: 80px;
    border-bottom: 7px double #000000;
}

.item-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-right: 20px;
}

.item-info {
    display: flex;
    flex-direction: column;
}

.banner {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 20px;
    font-family: 'bm';
    color: #000000;
}

.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'bm';
}

.des {
    font-size: 15px;
    margin-bottom: 20px;
}

.bid {
    font-size: 17px;
    font-weight: bold;
}

.btn {
    border: none;
    color: rgb(0, 0, 0);
    background-color: #ccc0f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    margin-left: auto;
    align-self: flex-end;
}

.info {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
}
</style>