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


