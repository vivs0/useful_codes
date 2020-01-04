## Return json value base on key using positive look behind
```
  (?<="dfs.namenode.http-address":).?+[\/.\-("+\w+")\*\:]+
```
