## Java Stream API Cheat Sheat ####

### Filter and get single record

```
Object ob = list.stream().filter(c->c.<filter condition>).findFirst().get()
```
