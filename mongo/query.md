### Search in array of json
### Data ###
{
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
db.getCollection('Employee').find({
    "contact.mobile" : {$elemMatch: {"number" : "123456"}}
    })
```
