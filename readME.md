### 相关依赖版本说明

```
### node@19.8.1

### npm@9.5.1

### node-sass@9.0.0

### sass@1.63.2

### vite@5.2.8

### vue@3.4.21

### sass-loader@16.0.5

```

### 项目启动
```
1. npm i

2. npm run start

```

### wxInitialize方法库

```
<!-- 详细使用方法请参考wxInitialize.js 方法说明 -->
```

### showModal 使用方法说明

```

<showModal ref="modalIndex"></showModal>

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

```