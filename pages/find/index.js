//index.js
//获取应用实例
const app = getApp()
import request from '../../utils/request.js';
import URL from '../../utils/url';
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
tuijiangedan:[]
  },
  onLoad:function(){
this.getBanner();
this.getTuiJian();
  },
  getBanner:function(){
    request('GET',URL.BANNER,'',(res)=>{
      this.setData({
        imgUrls:res.banners
      })
      console.log(res);
          },()=>{
      
          },()=>{
      
          });
  },
  getTuiJian:function(){
    request('GET',URL.TUIJINAGEDAN,'',(res)=>{
      this.setData({
        tuijiangedan:res.result
      })
      console.log(res);
          },()=>{
      
          },()=>{
      
          });
},
  goTuiJian: function () {
    wx.navigateTo({
      url: '/pages/tuijian/index',
    })
  },
  goGeDan:function(){
    wx.navigateTo({
      url: '/pages/gedan/index',
    })
  },
  goFM: function () {
    wx.navigateTo({
      url: '/pages/gedan/index',
    })
  },
  goGeDan: function () {
    wx.navigateTo({
      url: '/pages/gedan/index',
    })
  }
})
