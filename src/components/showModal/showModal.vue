<template>
  <view class="showModal" v-if="show">
    <view class="modal">
      <view class="title">{{ obj.title }}</view>
      <view :style="obj.contentStyle ? obj.contentStyle : ''" class="content">{{ obj.content }}</view>
      <view class="btns">
        <view v-if="obj.showCancel" @click="btnSuccess(false)" :style="obj.cancelStyle ? obj.cancelStyle : ''">{{ obj.cancelText }}</view>
        <view class="confirm" v-if="obj.showConFirm"  @click="btnSuccess(true)" :style="obj.confirmStyle ?  obj.confirmStyle : ''">{{ obj.confirmText }}</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      obj: {
        title: '温馨提示',
        content: '',
        confirmText: '确定',
        cancelText: '取消',
        showCancel: true,
        showConFirm: true,
        success: null
      },
      show: false
    }
  },
  methods: {
    changeShow () {
      this.show = !this.show
    },
    btnSuccess(res) {
      this.show = false
      if (typeof this.obj.success === 'function') {
        this.obj.success(res)
      }
      this.obj = {
        title: '温馨提示',
        content: '',
        confirmText: '确定',
        cancelText: '取消',
        showCancel: true,
        showConFirm: true,
        success: null
      }
    },
    checkeShow (obj) {
      let objKey = Object.keys(obj)
      if (obj.success && typeof obj.success !== 'function') {
        return console.error('success not a function')
      }
      let thisObj = this.obj
      objKey.forEach(ret => {
        if (obj[ret] !== '') {
          thisObj[ret] = obj[ret]
        }
      })
      this.obj = thisObj
      console.log(this.obj)
      this.show = true

    }
  },

}
</script>
<style lang="scss" scoped>
@import './showModal';
</style>