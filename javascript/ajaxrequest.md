### Ajax function to send data to server
```
  function ajaxRequest(_url, _type, _data){
    return $.ajax({
        url 			: _url,
        type 			: _type,
        dataType 		: "json",
        contentType		: "application/json",
        mimeType		: "application/json",
        data			: JSON.stringify(_data)
      });
  }
```
