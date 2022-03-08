// pages/home-video/index.js

// import hyRequest from '../../service/index'
import {getTopMVs} from  '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 它不是在任何地方都好用的，有时候会影响性能
  // onLoad: async function (options) {
  //   const res = await getTopMVs(0)
  // },
  onLoad: function (options) {
    getTopMVs(0).then(res => {
      this.setData({topMVs: res.data})
    })
    // hyRequest.get("/top/mv",{offset: 0, limit: 10}).then(res => {
    //   this.setData({topMVs: res.data.data})
    // })
  //   let _this = this
  //   wx.request({
  //     url: 'http://123.207.32.32:9001/top/mv',
  //     data: {
  //       offset: 0,
  //       limit: 10
  //     },
  //     success: function(res) {
  //       console.log(res)
  //       _this.setData({topMVs: res.data.data})
  //     },
  //     fail: function(err) {
  //       console.log(err)
  //     }
  //   })
    
  },
})
