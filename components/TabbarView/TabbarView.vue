<template>
  <van-tabbar v-model="active" active-color="red">
    <van-tabbar-item
      v-for="item in menu"
      :key="item.url" 
      :icon="item.icon" 
      :to="item.url"
      :info="item.info"
    >
      {{ item.chnTitle }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: this.$store.getters.activeTabbar
    }
  }
}
</script>
