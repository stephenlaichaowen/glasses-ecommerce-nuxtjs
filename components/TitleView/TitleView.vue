<template>
  <div class="title-view">
    <h3>
      <van-icon :name="name" />
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title-view {
  height: 75px;
  line-height: 75px;

  h3 {
    font-size: 18px;
    text-align: center;
  }
}
</style>