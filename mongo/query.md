### Remove field in all records
```
db.collection.update({},{$unset:{"isMin":1}}, {multi:true})
```

### Rename field in all record
```
db.getCollection('demo').update({}, {$rename:{"old":"new"}}, false, true);
```
### Get All uniqe values from collection
```
db.getCollection('CollectionName').distinct("COllection Fieldname")
```

### Update all record in mongo
```
update({},{$set:{'isApproved':true}}, false, true)
```
### Search in array of json Mongo 3.2
### Employee ###
```
{
    "id": "e001",
    "name: "Vivek Singh",
    "country": "India",
    "contact" : {
        "mobile": [
            {
                "number": "123456"
            },
            {
                "number": "9788"
            }
        ]
    }
}
```

```
db.getCollection('Employee').find({
    "contact.mobile" : {$elemMatch: {"number" : "123456"}}
    })
```

### Join collections based on condition
```
db.getCollection('Department').aggregate(
[
    {$lookup:{
        from: "Employee",
        localField: "dept_id",
        foreignField: "id",
        as : "Employee"
    }
    },
    {
        $unwind: "$Employee"
    },    
    {
        $match:{ "departments.managers" : {$elemMatch: {"manager_code":"m20"} }}
    }
]
)
```

### Mongodb Group by and count
```
db.employee.aggregate(
[
    {
        $match:{"botReplyTime": {$gte: ISODate("2019-10-09T00:00:00.000Z")}}
    },
    {
        $group:{
            _id:"$userName", 
            no_of_chat: {$sum : 1}, 
            "doc" : {"$first": "$$ROOT"},
            "user_id" : {"$first" : "$userId"},
            "userName" : {"$first" : "$userName"}
        }
    }
])
```

### Mongodb return matched array element
```
db.getCollection('employee').find(
    {"contact.mobile.number" : "123456"},
    {"contact.mobile.$" : 1}
)
```

### update each record with new field
```
db.employee.updateMany({},{$set:{"mobile" : NumberInt(0011223344)}})
```

### mongo lookup multiple collections
```
    db.getCollection('Employee').aggregate([
    {
        $lookup:{
            from: "Department",
            localField: "<emp_id>",
            foreignField: "<emp_id_in_department>",
            as:"department"
        }
    },
    {
        $match:{
            "emp_id" : "E002"
        }
    },
    {
        $unwind: "$employee"
    },
    {
        $lookup:{
            from: "UserRole",
            localField: "department.role_id",
            foreignField: "id",
            as:"emp_role"
        }

    },
    {
        $unwind: "$emp_role"
    }
    ])
```

### Limit number sub documents to return
```
{
    "id",
    "child":[{
    "key":"contains huge number of documents"
    }]
}

db.demo.find(
    {},
    {
        "child":{$slice: 10}
    })
```

### Mongo query return all matched array elements
```
https://stackoverflow.com/questions/15415023/mongodb-select-matched-elements-of-subcollection
```


### Mongo graphlookup query
```
[{
    $graphLookup:{
        from : "master",
        startWith: "$id",
        connectFromField: "id",
        connectToField: "partOf",
        maxDepth: 5,
        as : "out"
    }
},
    {
        $match:{
            "id" : "45892221"
        }
    }
]
```

### Mongo $filter use.
### Usefull to filter the projected results in aggregation
```
   [
       {
            '$lookup':{
              'from' : 'Department',
              'localField' : 'department_id',
              'foreignField': 'id',
              'as':'department'
		    }
       },
       {
            'match' : {...}
       },
    {
  	   '$project': {
  		  'department': {
  			  '$filter': {
  				  'input': "$department",
  				  'as': "department",
  				  "cond": {
  					 '$eq': [
  						"$$department.branch",'branch_id']
  					 ] 
  				  }
  			  }
  		} ,
  		'_id': 0,
  		'id': 1,
  		'name': 1,
  	    }
    }   
   ]		
    project = {
            '$project': {
              '_id' : 0,
              'id' : 1,
              'name' : 1,
              'department.name' : 1			  
            }
    }
```

## Distict with filter
```
db.Article.distinct("Comment.Reply.ip",{"Comment.Reply.email" : "xxx"})
```

## Mongodb javascript example
```
db.getCollection('coll').find({
    "features.featureKeyValueApproved.featureValue.No  of Cylinders":{$exists:true}
})
.forEach(function(e,i){
    try{
        if(e.features.featureKeyValueApproved != undefined){
            e.features.featureKeyValueApproved.forEach(function(f,j){
                if(f.featureKey === 'Engine and Transmission'){
                    f.featureValue['No of Cylinders'] = f.featureValue['No  of Cylinders'];
                    delete f.featureValue['No  of Cylinders'];
                }
            });
            db.variants_v11.update({ _id : e._id }, e);
        }
    }catch(ex){
        print(ex)
    }
})
```
## FInd records which have duplicate field value
```
db.collection.aggregate([
  {
    $group: {
      _id: "$field_with_duplicates",
      count: { $sum: 1 },
      documents: { $push: "$$ROOT" }
    }
  },
  {
    $match: {
      count: { $gt: 1 }
    }
  }
]);
```
