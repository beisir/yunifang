export default (type='get',url='',data={},async=true) =>{
  new Promise(function(resolve, reject) {
    var xhr;
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest()
    }else{
      xhr = new ActiveXObject();
    }
    if(type == 'get'){
      var newdata = ''
        Object.keys(data).forEach(key => {
          newdata+= key + '=' + data[key] + '&'
        })
        url = url + '?' + nwedata.substr(0,newdata.lastIndexOf('&'))
        xhr.open(type,url,async)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.send()
    }else if(){
      xhr.open(type,url,async)
      xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
      xhr.send(JSON.stringify(data))
    }else{
      reject('type err')
    }
    xhr.onreadystatechange = ()=>{
      if(xhr.status == 200){
        if(xhr.readyState == 4){
          var options = xhr.responseText
          if(typeof options !== 'object'){
            resolve(JSON.parse(options))
          }
            resolve(options)
        }else{
          reject('error')
        }
      }
    }

  })
}
