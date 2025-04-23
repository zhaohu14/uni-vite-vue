<template>
  <view class="page-container">
    <view class="card">
      <!-- 头像和基本信息区域 -->
      <view class="user-info">
        <view class="avatar-container">
          <image :src="userAvatar" alt="用户头像" class="avatar" mode="aspectFill" />
        </view>
        <view class="info-container">
          <view class="name-gender">
            <text class="username">张*晴</text>
            <view class="gender">
              <uni-icons type="female" size="16" color="#EC4899"></uni-icons>
              <text class="gender-text">女</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 就诊卡号信息 -->
      <view class="card-info">
        <text class="card-label">就诊卡号</text>
        <text class="card-number">31******789</text>
      </view>
      <!-- 按钮组 -->
      <view class="button-group">
        <view class="action-btn qrcode-btn" @click="handleShowQRCode">
          就诊卡展码
        </view>
        <view class="action-btn switch-btn" @click="handleSwitch">
          切换就诊卡
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      userAvatar: 'https://ai-public.mastergo.com/ai/img_res/59c96a4f06a6a1f856bfb1459c9a44d1.jpg',
      showQrCode: true
    }
  },
  methods: {
    handleSwitch () {
      uni.showToast({
        title: '切换卡片'
      })
    },
    handleShowQRCode () {
      // uni.showToast({
      //   title: '展码'
      // })
      this.$emit('showQrCode', '123456789')
    }
  }
}
</script>
<style>
@import './userCard.scss';
</style>
  