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
