<template>
  <view class="content">
    <!-- ============================ 用户卡片 ============================ -->
    <view style="width: 95%;margin-left: 2.5%;">
      <userCard @showQrCode="showQrCode"></userCard>
    </view>
    <!-- ============================ 功能模块 ============================ -->
    <functionCard></functionCard>
    <!-- ============================ 展码区域 ============================ -->
    <view class="qrCodeView" v-if="showQrCodes">
      <view class="qrcodeContent">
        <view class="titles">电子健康码</view>
        <view class="qrBody">
          <uv-qrcode ref="qrcode" :value="qrCodeOptions.value" :options="qrCodeOptions"></uv-qrcode>
        </view>
        <view class="btns">
          <uv-button class="btn" type="primary" :plain="true" text="刷新二维码"></uv-button>
          <uv-button class="btn" type="error" :plain="true" text="关闭二维码" @click="closeQrCode"></uv-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showQrCodes: false,
      qrCodeOptions: {
				data: 'https://www.uvui.cn',
				size: 300,
				useDynamicSize: false,
				errorCorrectLevel: 'Q',
				margin: 10,
				areaColor: "#fff",
				backgroundColor: "#fff",
				// 指定二维码前景，一般可在中间放logo
				foregroundImageSrc: 'https://www.uvui.cn/common/logo.png',
        value: ''
			}
    }
  },
  methods: {
    // 展示二维码
    showQrCode (e) {
      this.qrCodeOptions.value = e
      this.showQrCodes = true
    },
    // 关闭二维码展示
    closeQrCode () {
      this.showQrCodes = false
    }
  }
}
</script>

<style lang="scss">
@import url('./index.css');


</style>
