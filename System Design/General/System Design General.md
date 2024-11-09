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
- datadog uses queue
why QUEUE
Message queues: They remove dependencies between components. Message queues serve as
buffers when high volumes of notifications are to be sent out. Each notification type is
assigned with a distinct message queue so an outage in one third-party service will not affect
other notification types.
Workers: Workers are a list of servers that pull notification events from message queues and
send them to the corresponding third-party services.

• Single point of failure (SPOF): A single notification server means SPOF. should not be there

# News Feed/facebook/ instagram

- publish and retrieve api
- rate limiter on things like how many posts user can make daily
- CDN to retrieve data for
- fanout when publishing
- fanout when retrieving post
- Graph databse can be used as there is relationship like following/follower/friend/fof

  # DB options
  - time series  openTS DB
  - text seach Elastic Search with fuzzinesss factor (edit distance) airport airpotr
  - Blob starage S3 + CDN, S3 can store the image at one location, CDN can provide that at/near the required location
  - nonstructured data - > amazon shirt has size M,XL; milk comes in litre, food comes in grams
  - cassandra is nosql DB
<img width="1312" alt="image" src="https://github.com/user-attachments/assets/4f2b4f66-5af3-4a88-96b4-b1690a237b28">

