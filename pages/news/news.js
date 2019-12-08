//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [{
      title: '多家银行推T+0产品余额理财量价齐升 力压余额宝',
      tag:'Financing',
      sourcefrom:'Reuters few minute ago',
      img:'/images/nav/reuters.png'
    }, {
        title: '国务院决定进一步扩大信贷资产证券化试点',
        tag: 'policy',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/timg.jpeg'
    }
      , {
        title: '国务院决定进一步扩大信贷资产证券化试点',
        tag: 'policy',
        sourcefrom: 'IT Home 2 months ago',
        img: '/images/nav/timg.jpeg'
      }
      , {
        title: '金融专业大学生凑学费炒股 3个月3万元亏8000多',
        tag: 'Experience',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/facebookpng.png'
      }
      , {
        title: '金融专业大学生凑学费炒股 3个月3万元亏8000多',
        tag: 'Experience',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/facebookpng.png'
      }
      , {
        title: '国际金价强劲反弹 两个月时间整体上涨20%左右',
        tag: 'policy',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/reuters.png'
      }
      , {
        title: '国际金价强劲反弹 两个月时间整体上涨20%左右',
        tag: 'policy',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/reuters.png'
      }
      , {
        title: '国际金价强劲反弹 两个月时间整体上涨20%左右',
        tag: 'policy',
        sourcefrom: 'IT Home 2 days ago',
        img: '/images/nav/reuters.png'
      }
    ]
  },
  //事件处理函数
  navToDetail: function () {
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail'
    })
  },
  onLoad: function () {
   
  }
})
