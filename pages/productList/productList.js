const app = getApp()
const categoriesJson = require('../../data/categories.js');
const financialProductsJson = require('../../data/financialProducts.js');
Page({

  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    activeCategoryId: 0,
    scrollTop: 0,
    loadingMoreHidden: true,
    coupons: [],
    curPage: 1,
    pageSize: 10,
    cateScrollTop: 0,
    items: [],
    comapreItems: [],
  },
  onLoad() {
    this.setData({
      nbTitle: '新标题',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
      categories: categoriesJson.categories,
    })
  },
  onReachBottom: function() {
    this.setData({
      curPage: this.data.curPage + 1
    });
    this.getItemsList(this.data.activeCategoryId, true)
  },
  onPullDownRefresh: function() {
    this.setData({
      curPage: 1
    });
    this.getItemsList(this.data.activeCategoryId)
    wx.stopPullDownRefresh()
  },
  tabClick: function(e) {
    let offset = e.currentTarget.offsetLeft;
    if (offset > 150) {
      offset = offset - 150
    } else {
      offset = 0;
    }
    this.setData({
      activeCategoryId: e.currentTarget.id,
      curPage: 1,
      cateScrollTop: offset
    });
    this.getItemsList(this.data.activeCategoryId);
  },

  getItemsList: function(categoryId, append) {
    if (categoryId == 0) {
      categoryId = "";
    }
    var that = this;
    wx.showLoading({
      "mask": true
    })
    switch (categoryId) {
      case "1":
        let financialItems = this.paging(this.data.curPage, this.data.pageSize, financialProductsJson.financialProducts)
        if (financialItems.length > 0) {
          let items = [];
          if (append) {
            items = that.data.items
          }
          for (var i = 0; i < financialItems.length; i++) {
            items.push(financialItems[i]);
          }
          that.setData({
            loadingMoreHidden: true,
            items: items,
          });
        } else {
          let newData = {
            loadingMoreHidden: false
          }
          if (!append) {
            newData.items = []
          }
          that.setData(newData);
        }
        break;
      default:
        //Just show the financial products in this prototype
        this.setData({
          items: []
        });
        break;
    }
    wx.hideLoading()
  },
  checkboxChange: function(e) {
    this.setData({
      comapreItems: e.detail.value
    })
  },
  navToCompare: function(e) {
    wx.navigateTo({
      url: '/pages/productCompare/index?itemIds='+JSON.stringify(this.data.comapreItems),
    })
  },
  paging: function(pageNo, pageSize, array) {
    var offset = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
  }
})