export default defineAppConfig({
  pages: [
    'pages/user/index',
    'pages/index/index' //一一对应,谁放在前面先加载谁
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
