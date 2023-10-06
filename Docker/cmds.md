
See '**docker --help**'
s-yadavmercari.com@QKGR6NLJYL ~ % **docker images**
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    b038788ddb22   5 months ago   9.14kB
s-yadavmercari.com@QKGR6NLJYL ~ % **docker pull nginx:1.23**
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
s-yadavmercari.com@QKGR6NLJYL ~ % **docker images**         
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
nginx         1.23      b005e88565d7   4 months ago   135MB
hello-world   latest    b038788ddb22   5 months ago   9.14kB
s-yadavmercari.com@QKGR6NLJYL ~ % **docker pull nginx**     
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
s-yadavmercari.com@QKGR6NLJYL ~ % **docker images**    
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
nginx         latest    2a4fbb36e966   2 weeks ago    192MB
nginx         1.23      b005e88565d7   4 months ago   135MB
hello-world   latest    b038788ddb22   5 months ago   9.14kB
s-yadavmercari.com@QKGR6NLJYL ~ % 
