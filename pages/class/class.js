// pages/index/index.js
var config = require('../../config/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: (options) => {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: config.location_origin + '/getcpdata/get_cp_data/getClassInfo',
      success: res => {
        let a = []
        for (let b in res.data) {
          a = a.concat(res.data[b])
        }
        this.setData({
          classInfo: a
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  goList (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/list/list?id=' + id,
    })
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