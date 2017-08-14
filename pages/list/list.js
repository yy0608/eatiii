// pages/list/list.js
var config = require('../../config/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: 'cp_id',
    start: 1,
    // cp_name: '',
    listData: [],
    totalPage: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.setData({
      id: id
    })
    this.getList('')
  },

  goDetail (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },

  search (event) {
    let keyword = event.detail.value
    this.setData({
      cp_name: keyword
    })
    // wx.showToast({
    //   title: keyword,
    //   icon: 'success',
    //   duration: 2000
    // })
    this.getList(keyword)
  },

  getList(keyword) {
    wx.request({
      url: keyword ? config.location_origin + '/getcpdata/get_cp_data/searchData' : config.location_origin + '/getcpdata/get_cp_data/getClassIdCp',
      data: {
        order: this.data.order,
        class_id: this.data.id,
        start: this.data.start,
        cp_name: keyword
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          listData: res.data.data,
          totalPage: res.data.page
        })
      }
    })
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