// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 500
    },
    currentSwiper: 0,
    detailInfo: {
      "Id": 45,
      "ShopId": 2,
      "DataStatus": 2,
      "GoodsNo": "8516002",
      "Title": "进口｜日本michinoku｜火鸡筋60g",
      "Classfy": 500,
      "ClassfyName": "零食",
      "GoodsImage": "https://img10.360buyimg.com/n7/jfs/t1/200954/1/15908/97777/6191bf3bEe154b5a6/1413ff70e3e97825.jpg",
      "Stock": 10,
      "SaleAmount": 88,
      "CreateDate": "2021-11-04T18:30:09.001",
      "UpdateDate": "2021-11-05T18:30:09.001",
      "Brand": "michinoku",
      "OrderNum": 0,
      SwiperImgList: [
        "https://img13.360buyimg.com/n1/jfs/t1/72430/28/15180/59386/5dca79a8Eb09e7847/215aa6501140dc90.jpg",
        "https://img13.360buyimg.com/n1/jfs/t1/99864/10/2091/270611/5dca79d9E6e979ae8/e18fcd2cb2986dfd.jpg",
        "https://img13.360buyimg.com/n1/jfs/t1/19971/22/2892/499169/5c21cbf4Eb13f24d2/50f3f134f100b532.jpg"
      ],
      DetailImgList: [
        "https://img20.360buyimg.com/imgzone/jfs/t1/115249/5/20556/51432/61e4dd7dE7dac94b4/713ea36eb1cc3d2c.jpg",
        "https://img30.360buyimg.com/sku/jfs/t1/161039/33/26300/143548/61b04347E6d157779/57410582b636b147.jpg",
        "https://img14.360buyimg.com/cms/jfs/t1/156559/9/16124/523985/60500ae0E3ba999f7/27cc7f771a637113.jpg",
        "https://img10.360buyimg.com/cms/jfs/t1/153409/29/19977/278646/6039f0b2Ee3c216ac/fbd79bafb306c51c.jpg",
        "https://img14.360buyimg.com/cms/jfs/t1/130914/22/18812/137361/5fcb52f3E8af8bcfa/faeee962a35d40e0.jpg"
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getDetailData(options.goodsNo);
  },
  /**
   * 根据商品行情信息接口获取商品行情信息
   * todo
   * 如果仅是js逻辑赋值用“=”即可，如果是界面元素赋值，js处用setData
   * @param {*} e 
   */
  getDetailData: function (goodNo) {
    let self=this;
    console.log("goodNo="+goodNo)
    wx.request({
      url: 'example.php', //仅为示例，并非真实的接口地址
      data: {
        goodsNo:goodNo
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //此处 赋值 detailInfo  todo
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

  },

  /**
   * 幻灯片切换事件
   * @param {*} e 
   */
  swiperChange: function (e) {
    //console.log(e);
    let temp = e.detail.current;
    this.setData({
      currentSwiper: temp
    });
  },
  /**
   * 预览图片
   * @param {*} e 
   */
  preShowImg: function (e) {
    //console.log(e);
    wx.previewImage({
      current: e.currentTarget.dataset.cururl, // 当前显示图片的http链接
      urls: this.data.detailInfo.SwiperImgList // 需要预览的图片http链接列表
    })
  },
  /**
   * 跳转首页
   */
  jumpHome: function () {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  /**
   * 拨打客服【咨询】
   */
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 跳转购物车
   */
  jumpShopCar: function () {
    wx.switchTab({
      url: '/pages/shopcar/shopcar'
    })
  },
  /**
   * 加入购物车 
   * todo
   */
  addToShopCar: function () {
    console.log("加入购物车");
  },
  /**
   * 立即购买
   * todo
   */
  imlBuy: function () {
    console.log("立即购买");
  }
})