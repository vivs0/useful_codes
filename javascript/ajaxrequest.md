### Ajax function to send data to server
```
  function ajaxRequest(_url, _type, _data, _handle){
    return $.ajax({
        url 			: _url,
        type 			: _type,
        dataType 		: "json",
        contentType		: "application/json",
        mimeType		: "application/json",
        data			: JSON.stringify(_data),
        success			: function(data){
          _handle(data);
        }
      });
  }
```

### wait until ajax request is completed
```
	var promise = new Promise(function(resolve, reject){
		ajaxRequest("/api/endpoint", "post", request, function(response){
			if(response.status === 200){
				resolve();
			}else{
				reject(response.message);
			}
		});
	}).then(function(result){
		alert("Success");
		location.reload();
	}).catch(function(data){
		alert(data.message);
		return;
	});

```
