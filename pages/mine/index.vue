<template>
  <div>
    <h1>我的</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: '我的'
    }
  },
  data() {
    return {
      title: '我的'
    }
  },
  methods: {
    ...mapActions(['setTitle', 'setActiveTabbar'])    
  },
  created() {
    this.setTitle(this.title)
    this.setActiveTabbar(4)    
  }
}
</script>


<style lang="scss" scoped>

</style>