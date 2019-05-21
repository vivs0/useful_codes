#Problem after upgrading mysql 5 to 8
mysql -u root -p
mysql> SET GLOBAL innodb_fast_shutdown = 1;
mysql_upgrade -u root -p


#list all users
select user from mysql.users;

#mysql select top gainer daywise
 select symbol, max(percentchange) as changes, date(`date`) as sDate from dailystockview
 group by symbol, sDate
 order by changes desc 
