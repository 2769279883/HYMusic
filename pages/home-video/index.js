// pages/home-video/index.js

// import hyRequest from '../../service/index'
import {getTopMVs} from  '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 它不是在任何地方都好用的，有时候会影响性能
  // onLoad: async function (options) {
  //   const res = await getTopMVs(0)
  // },
  onLoad: function (options) {
    // 第二种
    // getTopMVs(0).then(res => {
    //   this.setData({topMVs: res.data})
    // })
    // 第一种
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
  // 第三种
  this.getTopMVData(0)
    
  },
  onPullDownRefresh: async function() {
    // const res = await getTopMVs(0)
    // this.setData({topMVs: res.data})
    this.getTopMVData(0)
  },

  // 封装网络请求的方法
  getTopMVData: async function(offset) {
    // 判断是否可以请求
    if(!this.data.hasMore && offset !== 0) return;
    // 加载动画
    wx.showNavigationBarLoading()
    // if(offset === 0) {
    //   wx.startPullDownRefresh()
    // }
    // 真正请求数据
    const res = await getTopMVs(offset)
    let newData = this.data.topMVs
    if(offset === 0) {
      newData = res.data
    } else {
      newData = newData.concat(res.data)
    }
    // 设置数据
    this.setData({topMVs: newData})
    this.setData({hasMore: res.hasMore})
    // 删除动画
    wx.hideNavigationBarLoading()
    if(offset === 0) {
      wx.stopPullDownRefresh()
    }
  },

  // 封装事件处理的方法
  handleItemClick: async function(event) {
    // 获取id
    const id =  event.currentTarget.dataset.item.id
    console.log(id)
    // 页面跳转
    wx.navigateTo({
      url: '/pages/detail-video/index',
    })
  },

  // 其他生命周期函数
  onReachBottom: async function() {
    // if(!this.hasMore) return;
    // const res = await getTopMVs(this.data.topMVs.length)
    // this.setData({topMVs: this.data.topMVs.concat(res.data)})
    // this.setData({hasMore: res.hasMore})
    this.getTopMVData(this.data.topMVs.length)
  }
})
