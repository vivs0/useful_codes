## Declare global variable.
### There is no direct way to decleare global variable in thymleaf.

```
@RequestMapping(value="/demo/{id}", method={RequestMethod.GET, RequestMethod.POST})
public String demoController(Model model, @PathVariable("id") String id){
   Employee ob =  dao.getSingleEmployee(patient_id);
   model.addAttribute("operation", "UPDATE");
   model.addAttribute("form", wrapper);
   model.addAttribute("data", "Hello");
   return "demo";
}
```
### demo.html
```
<div th:with="numdoc=${#lists.size(form.patientlist)}">
  numdoc can be accessed by all child elements 
</div>
```

### Pass thymleaf data to javascript/jquery

```
<script th:inline="javascript">
   /*<![CDATA[*/
   $(document).ready(function(){
     var numOfDocs = /*[[${#lists.size(form.patient.generalPractitioner)}]]*/ 'id';
     console.log(numOfDocs);
   });
   /*]]>*/	
</script>
```

### Dynamic array index variable
```
  <input class="form-control" placeholder="employee name" th:field="*{form.employee.mobile[__${numdoc}__].number}"/>
```

### for each 
```
<div class="form-row" >
   <div class="col-sm-10" id="">
      <label for"">List of employees</label>
      <th:block th:each="doc,i : *{from.employees}">
         <div class="form-row"  th:id="${i.index}">
            <div class="col-sm-2">
            <label for="pract_name" ></label>
               <input type="text" class="form-control" th:value="${doc.employeeName}" th:disabled="disabled" />
            </div>
         </div>
      </th:block>
   </div>
</div>
```
