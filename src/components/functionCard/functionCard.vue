<template>
  <view class="container">
    <!-- 功能模块区域 -->
    <view class="module-container">
      <view class="tab-bar">
        <view
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-item"
          :class="{ active: currentTab === index }"
          @click="handleTabClick(index)"
        >
          <text class="tab-text">{{ tab.title }}</text>
        </view>
      </view>

      <scroll-view scroll-y class="grid-content">
        <!-- 九宫格功能区域 -->
        <view class="grid-container">
          <view
            v-for="(item, index) in currentFunctions"
            :key="index"
            class="grid-item"
            @click="handleGridClick(item.type)"
          >
            <image class="grid-icon" :src="item.icon" />
            <text class="grid-title">{{ item.title }}</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: '门诊服务',
          functions: [
            {
              type: 'register',
              title: '预约挂号',
              icon: 'https://ai-public.mastergo.com/ai/img_res/e2c98737cd6b4ab7e96823c0ac58daef.jpg',
            },
            {
              type: 'guide',
              title: '就医指南',
              icon: 'https://ai-public.mastergo.com/ai/img_res/7ef72000ac9a29c8c992b4f1654fac38.jpg',
            },
            {
              type: 'queue',
              title: '排队叫号',
              icon: 'https://ai-public.mastergo.com/ai/img_res/cf2901aa3b1e46ae6a78e0f0e5657f4d.jpg',
            },
            {
              type: 'report',
              title: '检查报告',
              icon: 'https://ai-public.mastergo.com/ai/img_res/380d8699226bed1f42c969f9eebcede2.jpg',
            },
            {
              type: 'payment',
              title: '医疗缴费',
              icon: 'https://ai-public.mastergo.com/ai/img_res/0a8ec48964537ca398555a565c271189.jpg',
            },
            {
              type: 'prescription',
              title: '处方查询',
              icon: 'https://ai-public.mastergo.com/ai/img_res/cea0a515c171d65a1b433469f205003f.jpg',
            },
          ],
        },
        {
          title: '住院服务',
          functions: [
            {
              type: 'admission',
              title: '住院预约',
              icon: 'https://ai-public.mastergo.com/ai/img_res/9a2c94989600c93f6d1b07575d763ea8.jpg',
            },
            {
              type: 'bill',
              title: '费用查询',
              icon: 'https://ai-public.mastergo.com/ai/img_res/330aded72bfc32e00b531b6f399f3ee1.jpg',
            },
            {
              type: 'bed',
              title: '床位查询',
              icon: 'https://ai-public.mastergo.com/ai/img_res/d60349a4fc043d4c76776f6c3f47f71c.jpg',
            },
            {
              type: 'care',
              title: '护理服务',
              icon: 'https://ai-public.mastergo.com/ai/img_res/87aa99081d17715027be10ec4cdc8bb3.jpg',
            },
            {
              type: 'discharge',
              title: '出院办理',
              icon: 'https://ai-public.mastergo.com/ai/img_res/ae8073f80a7b7da8231ac7bc2a1567e9.jpg',
            },
            {
              type: 'deposit',
              title: '押金管理',
              icon: 'https://ai-public.mastergo.com/ai/img_res/7113388e28eda91cb4260b0a901361d5.jpg',
            },
          ],
        },
        {
          title: '在线咨询',
          functions: [
            {
              type: 'online-consultation',
              title: '在线问诊',
              icon: 'https://ai-public.mastergo.com/ai/img_res/a3182ce7dd923f4a42d15b811f0e9772.jpg',
            },
            {
              type: 'expert',
              title: '专家咨询',
              icon: 'https://ai-public.mastergo.com/ai/img_res/86ff9897a49150447a0b51979402fa1e.jpg',
            },
            {
              type: 'prescription-online',
              title: '在线开方',
              icon: 'https://ai-public.mastergo.com/ai/img_res/6f93bf084c7a8eeaf9a9735b1826dfcd.jpg',
            },
            {
              type: 'follow-up',
              title: '复诊随访',
              icon: 'https://ai-public.mastergo.com/ai/img_res/d2b94e2ab093cc0f174c986484fabb01.jpg',
            },
            {
              type: 'health-record',
              title: '健康档案',
              icon: 'https://ai-public.mastergo.com/ai/img_res/3556a235d1e524dfb26500f275b9b8c1.jpg',
            },
            {
              type: 'health-education',
              title: '健康教育',
              icon: 'https://ai-public.mastergo.com/ai/img_res/fb3893bd9fb61a9baa18b89cca775860.jpg',
            },
          ],
        },
      ],
      currentTab: 0,
      currentFunctions: []
    }
  },
  computed: {
    currentFunctions () {
      return this.tabs[this.currentTab].functions
    }
  },
  mounted () {
    this.currentFunctions = this.tabs[0].functions
  },
  methods: {
    handleTabClick (index) {
      this.currentTab = index
    },
    handleGridClick (type) {
      uni.showToast({
        title: `即将跳转到${type}页面`,
        icon: 'none'
      })
    }
  }
}
</script>
  
<style scoped>
@import url('./index.scss');
</style>
  