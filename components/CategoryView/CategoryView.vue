<template>
  <div class="category-view">
    <div class="item" v-for="item in data" :key="item.id">
      <div class="product" :style="{ background: item.bgColor }"></div>
      <p>框架</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    const data = await this.$axios.$get('/json/category.json')
    // return { data }
    this.data = data
  }
}
</script>

<style lang="scss" scoped>
.category-view {
  display: flex;
  background: black;
  margin-top: -5px;

  .item {
    width: 20%;
    // height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 11px 0 15px;

    .product {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 7px;
    }

    p {
      font-size: 13px;
    }
  }
}
</style>