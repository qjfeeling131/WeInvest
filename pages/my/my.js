const loaderInitialize = require("../../utils/loaderInitialize.js")
const personalData = require("../../data/personalData.js")
// pages/identity/identity.js
Page({

  /**
   * 页面的初始数据
   */
  data: 
    { ...loaderInitialize.indexData}
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loaderInitialize.HandleLoad.call(this)
    this.setData({ personalInfo: ConvertPersonalData(personalData.personalInfo)})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

function ConvertPersonalData(data)
{
   let array =[];
   for(let key in data)
   {
     array.push({key:key,value:data[key]})


   }
   return array
}