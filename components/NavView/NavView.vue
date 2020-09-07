<template>
  <van-nav-bar :title="title" fixed />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['title'])
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background: red;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;

  .van-nav-bar__title {
    color : white;
  }
}
</style>