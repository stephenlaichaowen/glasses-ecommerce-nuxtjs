<template>
  <div>
    <h1>購物車</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: '購物車'
    }
  },
  data() {
    return {
      title: '購物車'
    }
  },
  methods: {
    ...mapActions(['setTitle', 'setActiveTabbar'])    
  },
  created() {
    this.setTitle(this.title)
    this.setActiveTabbar(3)    
  }
}
</script>


<style lang="scss" scoped>

</style>