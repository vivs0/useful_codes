## Java Stream API Cheat Sheat ####

### Filter and get single record

```
Object ob = list.stream().filter(c->c.<filter condition>).findFirst().get()
```

### Java stream 8 collectors sorted set
Comparator<User> byAge = Comparator.comparingInt(User::getAge);

Supplier<TreeSet<User>> user = () -> new TreeSet<User>(byAge);

TreeSet<User> userSet = users.stream().collect(Collectors.toCollection(user));
