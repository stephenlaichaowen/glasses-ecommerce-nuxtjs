<template>
  <div class="home-view">
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
      <van-swipe-item v-for="item in data" :key="item.id">
        <img :src="item.img" alt="banner image">
      </van-swipe-item>
    </van-swipe>
    <CategoryView />

    <!-- 單品熱賣 -->
    <TitleView title="單品熱賣" name="star-o" />
    <SellingView />

    <!-- 精選活動 -->
    <TitleView title="精選活動" name="gift-o" />
    <WinnowView />

    <!-- 為你推薦 -->
    <TitleView title="為你推薦" name="label-o" />
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: '全視眼鏡商城'
    }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/json/banner.json')
    return { data }
  },
  data() {
    return {
      title: '全視眼鏡商城'
    }
  },
  methods: {
    ...mapActions(['setTitle', 'setActiveTabbar'])
  },
  created() {
    this.setTitle('全視眼鏡商城')
    this.setActiveTabbar(0)
  }
}
</script>

<style scoped>
.home-view {
  padding-top: 45px;
  min-height: 100vh;
}

.van-swipe {
  background: white;
}

img {
  width: 100%;
}
</style>