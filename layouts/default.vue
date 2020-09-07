<template>
  <div>
    <NavView />
    <nuxt />
    <TabbarView :menu="menu" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: '全視眼鏡商城'
    }
  },
  data() {
    return {      
    }
  },
  computed: {
    ...mapGetters(['menu'])
  }

  // 因為有安裝 Rem 適配套件, 所有不需要手動設置
  // mounted() {
  //   const root = document.querySelector('html')
  //   const deviceWidth = root.clientWidth
  //   root.style.fontSize = `${(deviceWidth / 375) * 16}px`

  //   window.addEventListener('resize', () => {
  //     root.style.fontSize = `${(deviceWidth / 375) * 16}px`
  //   })
  // }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f2f2f2;
}

h1 {
  margin-top: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-exact-active {
  color: red;
}

// .van-nav-bar {
//   background: red;

//   .van-nav-bar__title {
//     color : white;
//   }
// }
</style>
