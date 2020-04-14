## Validation using jquery validation plugin
```
    var validate_rule = {
    rules:{
        "field_name_1":{
        	required:true
    	},
    	"field_name_2":{
    		required: 'input[name="radio_field_name"][value="1"]:checked'
    	}
    },
    errorElement : 'div',
	messages:{
        "checkedField":{
        	required:"Atleast one referral reason must be selected"
    	}
	},
	errorPlacement: function(error, element){
		if (element.attr("name") == "some_name") {
            error.appendTo("#div-error");
        } 
		else {
            error.insertAfter(element);
        }		
	}
  
   $("form#id").validate(_validation_rules);

```
