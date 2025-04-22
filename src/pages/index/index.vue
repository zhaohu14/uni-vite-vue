<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" @click="toPage"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <!-- <MyButton text="测试"></MyButton> -->
     <showModal ref="modalIndex"></showModal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  methods: {
    toPage () {
      // uni.navigateTo({
      //   url: '/pages/me/me'
      // })
      // Vue组件
      this.$refs.modalIndex.checkeShow({
        title: '医院公告',
        content: '请求错误',
        showCancel: true,
        confirmStyle: '',
        cancelStyle: '',
        confirmText: '去缴费',
        cancelText: '不缴费',
        contentStyle: '',
        success: res => {
          console.log(res)
          console.log(this.title)
        }
      })
      // this.$refs.modalIndex.show = true
    }
  }
}
</script>

<style>

</style>
