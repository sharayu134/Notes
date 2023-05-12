# Allows Angular decorators as compenent, directive, pipes, injectable, 
### dependency consumer and dependency provider -> two roles
## What is depedency injection

### So Animal an = new Animal(String name ); while doing this in js we need to pass the parameters and if animal changes the accepting parameters we neeed to keep updating the same here to avoid such cases we have dependency injsection in Angular
![image](https://github.com/sharayu134/Notes/assets/43854821/23f7d455-6536-4d66-881f-3023ad7130c7)


### When we have a service which will be used in other compenents we mark it as @Injectable and then we add it in module class as providers this is how we can leverage other servises in component without redendant code.
![image](https://github.com/sharayu134/Notes/assets/43854821/cedc0d1e-692a-4405-9c99-a84160fed52f)
we can provide the service in component as well
![image](https://github.com/sharayu134/Notes/assets/43854821/5b67513a-5458-4a19-b34d-10baa29837dd)
