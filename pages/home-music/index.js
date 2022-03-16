// pages/home-music/index.js
import {getBanners} from "../../service/api_music"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: 0,
    banners: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
    // wx.request({
    //   url: 'http://123.207.32.32:9001/top/mv',
    // })
  },


  // 网络请求
  getPageData: function () {
    getBanners().then(res => {
      this.setData({banners: res.banners})
    })
  },

  // 事件处理
  handleSearchClick: function () {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  swiperImageLoaded: function () {
    // 获取图片的高度（如何去获取一个组件的高度）
    const query = wx.createSelectorQuery()
    query.select('.swiper-image').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec(res => {
      const rect = res[0]
      this.setData({swiperHeight: rect.height})
    })
  }

 
})