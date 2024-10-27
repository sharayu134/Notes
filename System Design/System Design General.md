Load balancer - Consistent hashing to get rid of duplicates like same server same request again 

Notif related - push/sms/email 

## Queue 
- Queue decoupoles the system component
- load balancer + health checker + notifier for others at place 
- you want to make async
- server is slow in processing the messages
- should have retry mech
- status tracking for task/msg
- different queues for different functionalities
- rate limiter for not sending one user many requests
- history logs/ error logs
- ofc cache data in notif service
- dead letter queue
why QUEUE
Message queues: They remove dependencies between components. Message queues serve as
buffers when high volumes of notifications are to be sent out. Each notification type is
assigned with a distinct message queue so an outage in one third-party service will not affect
other notification types.
Workers: Workers are a list of servers that pull notification events from message queues and
send them to the corresponding third-party services.

• Single point of failure (SPOF): A single notification server means SPOF. should not be there
