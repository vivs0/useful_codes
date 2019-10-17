## Search in array of json
```
db.getCollection('Observation').find({
    "code.coding" : {$elemMatch: {"code" : "81956-5"}}
    })
```
