//promise
function getAjax(url){
    return new Promise((resolve,reject) => {
        let req = new XMLHttpRequest();
        req.open('GET',url,true);
        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status == 200){
                resolve(req.responseText);
            }else {
                reject(req.responseText);
            }
        };
        req.send();
    })
};

getAjax("/url").then(data=>{

}).catch(e =>{});



   
$.ajax({
    url:'',
    dataType:"json",
    success:function(data){
  
    },
    error:function(e){
  
    }
  });
  
  $.post('url',{},function(data){
  
  })
  $.load('url',{},callback(function(esponseText, textStatus, XMLHttpRequest){}))
  
  
  let ajax = new XMLHttpRequest();
  ajax.open('GET','/url',"aysnc");
  ajax.setRequestHeader('Content-type',"json")
  ajax.send('');
  ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 &&ajax.status == 200){
      //... ajax.responseText
    }
  }
  var xmlhttp;
  function loadXmlR(url,cfunc){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open('GET',url,true);
    xmlhttp.send();
  }
  function myFunc(){
    loadXmlR('../url',function(){
      //xmlhttp.responseText
    })
  }
  myFunc()
  

