const md5 = require('../../assets/js/md5/md5.js');
Page({
  data: {
    account: '',
    password: '',
  },
    clickMe: function() {
      this.setData({ msg: "Hello World" })
    },
    bindAccount: function(e){
      this.setData({account: e.detail.value})
    },
    bindPassword: function(e){
      this.setData({password: e.detail.value })
    },
    login: function(){
      wx.request({
        url: '',
        methond:'GET',
        data: {
          company: 1,
        },
        header: { 'content-type': 'application/x-www-form-urlencoded' },  
        success: function(res){
          console.log(res.data)
        },
        fail: function(error){
          console.log(error)
        }
      })
    },
    loginSubmit: function(e){
        console.log(e);
        let password2 = md5.b64Md5(this.data.password);
        console.log(password2);
  
          wx.reLaunch({
            url: '../index/index',
          });
          
    }
  })