const loaderInitialize = require('../../utils/loaderInitialize.js')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: loaderInitialize.indexData,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    loaderInitialize.HandleLoad.call(this)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

