// Creitera with or and searching the nested array
/* {
      "name":["java"]
   },
   {
    "name" : [ {"given" : "Java"}]
   }
*/
public List<Object> searchByName(Object name) {
		Query query = new Query();
		Criteria crt = new Criteria();
		crt.orOperator(Criteria.where("name").all(name),Criteria.where("name.given").all(name));
		query.addCriteria(crt);
		return template.find(query, Object.class, Documents.PATIENT.toString());
	}
