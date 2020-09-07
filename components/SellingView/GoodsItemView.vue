<template>
  <div class="goods-item-view">
    <img class="img" :src="goods.img" alt="good image">
    <p class="title">{{ goods.title }}</p>
    <p class="desc">{{ goods.desc }}</p>
    <p class="other">
      <span class="now-price">${{ goods.nowPrice }}</span>
      <span class="old-price">${{ goods.oldPrice }}</span>
      <span class="rebate">{{ goods.rebate }}折</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item-view {
  width: 50%;
  // height: 222px;
  border-right: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  background: white;
  text-align: center;
  border-right: 1px solid #000;

  .img {
    width: 150px;
    // height: 130px;
    margin-top: 15px;
  }

  .title {
    margin-top: 5px;
    font-size: 13px;
    color: black;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 12px;
    color: #b4b4b4;
  }

  .other {   

    .now-price {
      color: red;
      font-size: 14px;
      font-weight: 800;
    }

    .old-price {
      font-size: 12px;
      color: #b4b4b4;
      margin-right: 0.5rem;
      text-decoration: line-through;
    }

    .rebate {
      font-size: 12px;
      color: white;
      background: red;
      border-radius: 3px;
      width: 33px;
      height: 12px;
      line-height: 12px;
      display: inline-block;
      margin: 10px 0;
    }
  }
}
</style>