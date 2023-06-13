# https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html

# Transactions 
### unit of work
### ![image](https://github.com/sharayu134/Notes/assets/43854821/0e11045f-d100-4b28-9374-2eab915fd9bb)
### here insert and update both will get executed or both will fail all or none
### eg -> account creation flow create account and update third party payment status this is whole transaction
### A transaction should follow all the ACIDs

# **ACID**

## Atomicity -> all or none [transaction executed all or none]
## Consistency -> correctness ,rules of columns should be followed while updating, you should not decrement balance below zero
## Isolation -> one transaction cannot affest the result of other transaction,  eg locks, no simulteneous concurrent updates
## Durability -> permanent update, if power failure there should not be any data loss
![image](https://github.com/sharayu134/Notes/assets/43854821/80095559-4478-4377-af62-144456980fa9)

# Scaling 
## Vereticle scaling
1. increasing RAM, memory, machine related things, better CPU
2. query optimization
3. indexing

## Horizontal Scaling
4. manager worker pattern  ![image](https://github.com/sharayu134/Notes/assets/43854821/acc99dde-c0eb-4776-bb02-03cef1858195)
5. circular manager worker ![image](https://github.com/sharayu134/Notes/assets/43854821/1b8d298e-8ef0-4937-8b8d-a2195f7e8a27)
-> eventual consistency and latency
6. partitions ![image](https://github.com/sharayu134/Notes/assets/43854821/4e75b7fd-aa93-4145-8ac0-0296b11dd6d6) partition animal table and employee table in different databases
7. Sharding like hashmap, key can give back same data key is searched in different dbs ![image](https://github.com/sharayu134/Notes/assets/43854821/04b3fed3-82f4-4bf6-9bc2-9d00838a6cc4)
8. Data center ![image](https://github.com/sharayu134/Notes/assets/43854821/9cc826ef-340e-4b64-aa50-7271f951a857)
9. read write layers![image](https://github.com/sharayu134/Notes/assets/43854821/368028b5-2f18-43be-b5af-6557ca2287bd)
10. Saas -> aws 



 


