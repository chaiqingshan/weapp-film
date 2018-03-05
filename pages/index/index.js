//index.js
Page({
    data: {
        films: [],
        limit: 6,
        loading: false,
        windowHeight: 0,
        windowWidth: 0
    },
    onLoad: function() {
        this.setData({
            loading: false
        });
    },
    onShow: function() {
        var that = this;
        wx.request({
            url: 'https://m.maoyan.com/movie/list.json',
            data: {
                offset: 0,
                type: 'hot',
                limit: that.data.limit
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    films: res.data.data.movies,
                    loading: true
                });
            }
        });
        wx.getSystemInfo({
            success: (res) => {
                that.setData({
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                });
            }
        });
    },
    pullDownRefresh: function(e) {
        this.onLoad();
    },
    pullUpLoad: function(e) {
        var limit = this.data.limit + 6;
        this.setData({
            limit: limit
        });
        this.onShow();
    }
});