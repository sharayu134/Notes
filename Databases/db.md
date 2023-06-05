# https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html

# Transactions 
### unit of work
### ![image](https://github.com/sharayu134/Notes/assets/43854821/0e11045f-d100-4b28-9374-2eab915fd9bb)
### here insert and update both will get executed or both will fail all or none
### eg -> account creation flow create account and update third party payment status this is whole transaction

# **ACID**

## Atomicity -> all or none [transaction executed all or none]
## Consistency -> correctness
## Isolation -> T1 T2 executing not knowing about each other
## Durability -> permanent update

