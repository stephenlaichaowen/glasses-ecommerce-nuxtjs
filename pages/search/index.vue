<template>
  <div>
    <h1>搜索</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: '搜索'
    }
  },
  data() {
    return {
      title: '搜索'
    }
  },
  methods: {
    ...mapActions(['setTitle', 'setActiveTabbar'])    
  },
  created() {
    this.setTitle(this.title)
    this.setActiveTabbar(2)    
  }
}
</script>

<style lang="scss" scoped>

</style>