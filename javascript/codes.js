// get the parent element of clicked element
function demo(btn){
    console.log(btn.parentNode.parentElement)
}


//get sibiling of clicked element
function demo(btn){
    $(btn.parentNode.parentElement.tagName+" td:nth-child(2)").text()
}

// function to convert form data to plain json
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
