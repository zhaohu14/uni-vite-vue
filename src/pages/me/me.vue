<template>
  <view class="container">
    <!-- ============================ 用户卡片 ============================ -->
    <view style="width: 95%;margin-left: 2.5%;">
      <userCard @showQrCode="showQrCode"></userCard>
    </view>
    <!-- ============================ 下方功能栏 ============================ -->
    <view class="titles">
      <uv-icon class="icon" name="list" size="24" color="#3b82f6"></uv-icon>
      <view>就诊信息</view>
    </view>
    <uv-line></uv-line>
    <view class="list">
      <view class="listContent"></view>
    </view>
  </view>
  
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '张三',
        phone: '138****1234',
        avatar: '/static/avatar.png'
      },
      list: [
        {
          name: '挂号记录',
          iconName: 'share'
        },
        {
          name: '处方中心',
          iconName: 'map'
        },
        {
          name: '问诊记录',
          iconName: 'chat'
        },
        {
          name: '满意度调查',
          iconName: 'star'
        },
        {
          name: '医生收藏',
          iconName: 'file-text'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('./index.css');
</style>