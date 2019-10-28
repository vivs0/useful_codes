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
