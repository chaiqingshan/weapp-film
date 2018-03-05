//details.js
Page({
  data: {
    films: [],
    loading: false,
    title: '正在热映',
    video: 'video-hide',
    details: '',
    windowWidth: 0
  },
  onLoad: function(options){
    var id = 'https://m.maoyan.com/movie/' + options.id + '.json';
    this.setData({
      title: options.titles
    });
    var that=this;
    wx.request({
      url: id,
      data: {

      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res){
        that.setData({
          films: res.data.data,
          loading: true
        });
        var pages=that.data.films.MovieDetailModel.dra;
        pages=pages.replace(/<.*?/ig,"");
        that.setData({
          details: pages
        });
      }
    });
  },
  onReady: function(){
    var that=this;
    wx.setNavigationBarTitle({
      title: that.data.title
    });
    wx.getSystemInfo({
      success: (res)=>{
        that.setData({
          windowHeight: windowHeight,
          windowWidth: windowWidth
        });
      }
    });
  },
  pay: function(){
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function(res){
      },
      'fail': function(res){
      }
    });
  },
  vShow: function(){
    this.setData({
      video: 'video-show'
    });
  },
  vHid: function(){
    this.setData({
      video: 'video-hides'
    })
  }
});
