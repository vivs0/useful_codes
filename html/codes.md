```
<div class="row">
  <div class="row">
    <div class="col col-md-5"><b>Search by</b></div>
  </div>
  <div class="row">
    <div class="col col-md-5">
      <div class="radio">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="criteria" value="1" th:checked="checked"/>C1
        </label>
      </div>
      <div class="radio">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="criteria" value="2" />C2
        </label>
      </div>
      <div class="radio">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="criteria" value="3" />C3
        </label>
      </div>
    </div>
  </div>
</div>

function changeS(){
		
	$("input[type=radio][name=criteria]").change(function(e){
		if(this.value == "1"){
			$("div#date-filter").hide();
			$("div#keyword-filter").hide();
			$("div#username-filter").show();
		}else if(this.value == "2"){
			$("div#date-filter").hide();
			$("div#keyword-filter").show();
			$("div#username-filter").hide();			
		}else{
			$("div#date-filter").show();
			$("div#keyword-filter").hide();
			$("div#username-filter").hide();			
		}
	});
}

```
