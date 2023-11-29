Monolithic |Microservice |
--- | --- | 
Everything including paymnets report contact all in one bundle one service | each component will have a different service and different database they will commiunicate thrugh API if required | 
Easy to deploy | we have to take care of each service to deploy | 
If one component fails all the service fails | it soesn't make a bigger impact unless a service fails on which others are dependent | 
If we make i payment it will affect hugly, even we have to deploy the whole service | If we make changes in the payments it can easily independenty tested and deploy |
Highly dependent / tightly coupled | independent / loosly coupled |
Same tech, frame work, language for whole service | can be differernt |
scalling is difficult | scalable
Easily get the relations between Foreign keys of table | As tables are in totaly different schhema no way to retain this relation e.g payment and user table |
Not a distributed system | Distributed System |
. | Autonomous, one task  |
. | **Build Test Deploy dependently** -VIMp if your service depends on any of these for other service it's not a Microservice |
. | **testing deploying scaling is easier** |

# Microservice resilence
## microservice should get back to normal after something happens some damage happens
## Circuit breaker pattern -> third party api dies if your service keeps calling tird party in endless looop not good, so you have to limit number of requests or responses to some threshold 
##  Stateless Services -> copy of services that can work as original 
https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli
