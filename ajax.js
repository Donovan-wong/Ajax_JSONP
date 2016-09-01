function createXHR(){
  if(typeOf XMLHttpRequest != "undefined"){
    return new XMLHttpRequest();
  }
  //IE
  else if(type ActiveXObject != "undefined"){
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
}
// 请求的回调函数
function requestCallBack() {
    if ( request.readyState == 4 && ((request.status >= 200 && request.status <= 300) || request.status == 304) ) {
        console.log(request.responseText);
    }
}

var request = createXHR();

request.onreadystatechange = requestCallBack;
// open函数的三个参数分别是请求的方法, 请求的地址, 是否异步(true表示异步)
request.open('POST', url, true);
request.send(null);
