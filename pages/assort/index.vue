<template>
  <div class="assort-view">
    <div class="side-view">分類</div>
    <div class="main-view">主體</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  head() {
    return {
      title: '分類'
    }
  },
  data() {
    return {
      title: '分類'
    }
  },
  computed: {
    ...mapGetters(['assort'])
  },
  methods: {
    ...mapActions(['setTitle', 'setActiveTabbar'])    
  },
  created() {
    this.setTitle(this.title)
    this.setActiveTabbar(1)    
  }
}
</script>


<style lang="scss" scoped>
.assort-view {
  background: #f2f2f2;
  padding: 2.8125rem 0;

  .side-view {
    // width: 5.9375rem;
    background: red;
  }

  .main-view {
    // width: 16.25rem;
    background: blue;
  }
}

</style>