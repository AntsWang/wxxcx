//index.js
//获取应用实例
const app = getApp()
const URI = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
import request from '../../utils/request.js';
Page({
  data: {
     list:[1,2,3,4,5,6,7,8,9,10],
     area:[]
  },
  onLoad(){
this.getData()
  },
  bindchange:function(e){
    console.log(e.detail.value);
    this.setData({
      area:e.detail.value.join(",")
    })
  },
  getData:function(){
    request("get",URI,'',(res)=>{
      console.log(res);
      this.setData({
        list:res.movies
      })
    },()=>{},()=>{})
  }
})
