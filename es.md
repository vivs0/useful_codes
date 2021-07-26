
### Update all records in index
```
curl -XPOST localhost:9200/customer/_update_by_query -H 'Content-Type: application/json' -d'
{
  "script": {
    "source": "ctx._source.per_name = 'Jane Doe'",
    "lang": "painless"
  },
  "query": {
    "match_all": {}
  }
}
```

### Simple boolean query
```
{
	"query":{
		"bool":{
			"must":[
				{
					"match":{
						"type":"CAR"
					}
				},
				{
					"match":{
						"isApproved":true
					}
				},
				{
					"match":{
						"isUpcoming":true
					}
				}
			
			]
		}
	},
	"sort":[]
}
```
