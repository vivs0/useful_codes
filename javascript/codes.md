### get the parent element of clicked element
```
  function demo(btn){
    console.log(btn.parentNode.parentElement)
  }
```

### get sibiling of clicked element
```
  function demo(btn){
    $(btn.parentNode.parentElement.tagName+" td:nth-child(2)").text()
  }
```
### function to convert form data to plain json
```
  function formSubmit(formid){
	$.fn.formToJson = function(){
		var json = {};
		var raw = this.serializeArray();
	    $.each(raw, function() {
	        if (json[this.name] !== undefined) {
	            if (!json[this.name].push) {
	                json[this.name] = [json[this.name]];
	            }
	            json[this.name].push(this.value || '');
	        } else {
	            json[this.name] = this.value || '';
	        }
	    });
	    return json;
		
	}
	console.log(JSON.stringify($("#"+formid).formToJson()))
  }
```

### Unflatten the json
```
Object.unflatten = function(data) {
    "use strict";
    if (Object(data) !== data || Array.isArray(data))
        return data;
    var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
        resultholder = {};
    for (var p in data) {
        var cur = resultholder,
            prop = "",
            m;
        while (m = regex.exec(p)) {
            cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
            prop = m[2] || m[1];
        }
        cur[prop] = data[p];
    }
    return resultholder[""] || resultholder;
};
```

### Flatten the json
```
Object.flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}
```

### Jquery pattren selector
```
	$('div[id^="startwith"')
	$('div[id^="contain_anywhere"')
	$('div[id$="endswith"')
```
https://stackoverflow.com/questions/190253/jquery-selector-regular-expressions
