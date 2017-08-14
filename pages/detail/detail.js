var config = require('../../config/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: '',
    materialList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = parseInt(options.id)
    wx.request({
      url: config.location_origin + '/getcpdata/get_cp_data/getAllCpIdInfo',
      data: {cp_id: id},
      success: res => {
        console.log(res.data)
        let material = JSON.parse(res.data.cp_info.cp_cailiao)
        let materialArr = []
        for (let a in material) {
          materialArr.push(material[a])
        }
        this.setData({
          detailData: res.data,
          materialList: materialArr
        })
        wx.setNavigationBarTitle({
          title: res.data.cp_info.cp_name
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