<script>
import wxInitialize from './utils/wxInitialize.js'
export default {
  onLaunch: function () {
    wxInitialize.initializeAll()
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
// @import url(./uni.scss);
</style>
