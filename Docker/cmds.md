
See '**docker --help**'
sharayu@QKGR6NLJYL ~ % **docker images**
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    b038788ddb22   5 months ago   9.14kB
sharayu@QKGR6NLJYL ~ % **docker pull nginx:1.23** // with version

1.23: Pulling from library/nginx
d981f2c20c93: Pull complete 
d717c194cb15: Pull complete 
659b10bed753: Pull complete 
f86799101465: Pull complete 
4c3dff00fc71: Pull complete 
1c60c7014732: Pull complete 
Digest: sha256:f5747a42e3adcb3168049d63278d7251d91185bb5111d2563d58729a5c9179b0
Status: Downloaded newer image for nginx:1.23
docker.io/library/nginx:1.23

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview nginx:1.23
sharayu@QKGR6NLJYL ~ % **docker images**         
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
nginx         1.23      b005e88565d7   4 months ago   135MB
hello-world   latest    b038788ddb22   5 months ago   9.14kB
sharayu@QKGR6NLJYL ~ % **docker pull nginx**     
Using default tag: latest
latest: Pulling from library/nginx
e886f0f47ef5: Pull complete 
9a9138853e32: Pull complete 
598a42ec6587: Pull complete 
82e490cc2043: Pull complete 
948128637a91: Pull complete 
e4cad15ac3f6: Pull complete 
096332b242c2: Pull complete 
Digest: sha256:32da30332506740a2f7c34d5dc70467b7f14ec67d912703568daff790ab3f755
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview nginx
sharayu@QKGR6NLJYL ~ % **docker images**    
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
nginx         latest    2a4fbb36e966   2 weeks ago    192MB
nginx         1.23      b005e88565d7   4 months ago   135MB
hello-world   latest    b038788ddb22   5 months ago   9.14kB
sharayu@QKGR6NLJYL ~ % docker run 
"docker run" requires at least 1 argument.
See 'docker run --help'.

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Create and run a new container from an image
sharayu@QKGR6NLJYL ~ % **docker run nginx**   // we can run any docker image locally which is available on hub     
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2023/10/06 16:10:42 [notice] 1#1: using the "epoll" event method
2023/10/06 16:10:42 [notice] 1#1: nginx/1.25.2
**docker ps** //to see the running instances/containers
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
9e15f158b5b2   nginx     "/docker-entrypoint.…"   30 seconds ago   Up 30 seconds   80/tcp    crazy_napier
sharayu@QKGR6NLJYL ~ % 

**ctrl + c to stop**

detach mode -d
