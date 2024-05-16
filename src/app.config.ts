
export default defineAppConfig({
  pages: [
    'pages/index/index', //一一对应,谁放在前面先加载谁
    'pages/doQuestion/index',
    'pages/result/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBTI性格测试',
    navigationBarTextStyle: 'black'
  }
})
