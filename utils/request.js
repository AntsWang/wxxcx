const REQUEST = function(method,url,data,success,fail,complete){
  wx.request({
    method:method,
    url: url,
    data: data,
    header: {
      'content-type': 'application/json'
    },
    success(res) {
     success(res.data)
    },
    fail(e){
fail(e)
    },
    complete(e) {
      complete(e)
    }
  })
}

export default REQUEST;