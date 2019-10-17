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
