App({
    onLaunch:function(){
        //本地存储
        var logs = wx.getStorageSync('logs')||[]
        logs.unshift(Date.now())
        wx.getStorageSync('logs',logs)
        //登录
        wx.login({
            success: res =>{
                //发送res.code 到后台换取openId ,sessionKey,unionId
            }
        })
        //获取用户信息
        wx.getSetting({
            success: res =>{
                if(res.authSetting['scope.userInfo']){
                    //已经授权，可以直接调用getUserInfo获取头像昵称，不会弹窗
                    wx.getUserInfo({
                        success: res =>{
                            //可以将res 发送给后台解码出的unionId
                            this.globalData.userInfo = res.userInfo
                            //用于getUserInfo 是网络请求，可能会在Page.onLoad之后才返回
                            //所以加入callback以防止这种情况
                            if(this.userInfoReadyCallback){
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    globalData:{
        userInfo: null
    }
})