<template>
  <div class="selling-view">    
    <GoodsItemView 
      v-for="item in sellingList" 
      :key="item.id" 
      :goods="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sellingList'])
  }
}
</script>

<style lang="scss" scoped>
.selling-view {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
  // overflow: hidden;
}
</style>