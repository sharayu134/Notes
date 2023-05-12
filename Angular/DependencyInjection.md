# Allows Angular decorators as compenent, directive, pipes, injectable, 
### dependency consumer and dependency provider -> two roles
## What is depedency injection

### So Animal an = new Animal(String name ); while doing this in js we need to pass the parameters and if animal changes the accepting parameters we neeed to keep updating the same here to avoid such cases we have dependency injsection in Angular

### When we have a service which will be used in other compenents we mark it as @Injectable and then we add it in module class as providers this is how we can leverage other servises in component without redendant code.
