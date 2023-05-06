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
