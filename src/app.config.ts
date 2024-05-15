
export default defineAppConfig({
  pages: [
    'pages/doQuestion/index',
    'pages/index/index' //一一对应,谁放在前面先加载谁
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBTI性格测试',
    navigationBarTextStyle: 'black'
  }
})
