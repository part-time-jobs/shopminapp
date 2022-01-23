// pages/home/home.js
Page({

  /**
   * 页面的初始数据  WXML 中的动态数据均来自对应 Page 的 data。
   */
  data: {
    swiperData: {
      background: ['/images/swiper1.png', '/images/swiper2.png', '/images/swiper3.png'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 500
    },
    goodsData: [{
        "Id": 45,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "8516002",
        "Title": "进口｜日本michinoku｜火鸡筋60g",
        "Classfy": 500,
        "GoodsImage": "https://img10.360buyimg.com/n7/jfs/t1/200954/1/15908/97777/6191bf3bEe154b5a6/1413ff70e3e97825.jpg",
        "Stock": 10,
        "SaleAmount": 88,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "michinoku",
        "OrderNum": 0
      },
      {
        "Id": 46,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "7516002",
        "Title": "10kg海洋鱼味布偶蓝猫橘猫加菲英短猫咪全价粮",
        "Classfy": 500,
        "GoodsImage": "https://img11.360buyimg.com/n7/jfs/t1/192732/29/17095/152061/610c8cd6Eb62817f1/98f85328e176aee6.jpg",
        "Stock": 10,
        "SaleAmount": 159.8,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "伟嘉成猫",
        "OrderNum": 0
      },
      {
        "Id": 47,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "6516002",
        "Title": "进口｜日本michinoku｜火鸡筋60g",
        "Classfy": 500,
        "GoodsImage": "https://img12.360buyimg.com/n7/jfs/t1/207130/1/15707/165419/61de22caE412ce94b/84f93ca8068db555.jpg",
        "Stock": 10,
        "SaleAmount": 88,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "michinoku",
        "OrderNum": 0
      },
      {
        "Id": 48,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "5516002",
        "Title": "5kg海洋鱼味布偶蓝猫橘猫加菲英短猫咪全价粮",
        "Classfy": 500,
        "GoodsImage": "https://img11.360buyimg.com/n7/jfs/t1/174131/22/25056/227377/61da9ba6E08e82c3a/e5d49750cb0e6bff.jpg",
        "Stock": 10,
        "SaleAmount": 78,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "michinoku",
        "OrderNum": 0
      },
      {
        "Id": 49,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "4516002",
        "Title": "进口｜日本michinoku｜火鸡筋60g",
        "Classfy": 500,
        "GoodsImage": "https://img12.360buyimg.com/n7/jfs/t1/219719/33/10865/407359/61dfe929E642399ff/468e1bb5b444032d.jpg",
        "Stock": 10,
        "SaleAmount": 88,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "michinoku",
        "OrderNum": 0
      },
      {
        "Id": 50,
        "ShopId": 2,
        "DataStatus": 2,
        "GoodsNo": "3516002",
        "Title": "6kg海洋鱼味布偶蓝猫橘猫加菲英短猫咪全价粮",
        "Classfy": 500,
        "GoodsImage": "https://img11.360buyimg.com/n7/jfs/t1/165294/22/14054/86815/60585c02E5afe91e5/405ee094319be20c.jpg",
        "Stock": 10,
        "SaleAmount": 88,
        "CreateDate": "2021-11-04T18:30:09.001",
        "UpdateDate": "2021-11-05T18:30:09.001",
        "Brand": "michinoku",
        "OrderNum": 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log(2222222)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义函数 获取商品列表数据
   * 需要在小程序 开发设置中  进行服务器域名配置  方可访问
   */
  getGoodsData: function () {
    wx.request({
      url: 'example.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  /**跳转商品详情页 */
  jumpDetail: function(e){
    //console.log(e);
    //1-获取商品id
    let goodsNo=e.currentTarget.dataset.goodsid;
    //console.log(goodsNo);
    //2-跳转商品详情页，将商品id传给详情页
    wx.navigateTo({
      url:"/pages/detail/detail?goodsNo="+goodsNo
    })
  }
})