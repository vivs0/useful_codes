```
  mvn -version 2>&1|grep "Apache Maven"|awk '{print $3}'
  mvn -version 2>&1|grep "Maven home"|awk -F':' '{print $2}'
```
### get port of running process
```
  netstat -ntlp|grep $(su $(ps -aux|grep "[n]ifi.sh"|awk '{print $1}') -c "$(ps -aux|grep "[n]ifi.sh"|awk '{print $(NF-1)}') status"|grep   PID|awk '{print $NF}'|cut -d'=' -f2)|awk '{print $4}'
```

### Recursively search files containing text
[Ref](https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux)
```
 grep -rnw -e 'BOT_HOME'
```
