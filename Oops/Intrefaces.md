* has interfaces keyword
* interface is a constract 
* contract between creator and consumer of interface
* error being thrown if error is thrown if anything is changed
* tight contract -> what is benefit _> here ther will be no way to find out the change interface gives this option -> we get error / alert [impact analysis]
* best practice to change the interface is not to change the interface -> create a new interface and implement it [mult interface ] to add the extra method this way nothing will change which is already implemented only we have to add new things
* always give proper examples like bank account hospital not cat dog
* interface methods don't have implementation -> (from java 8 we can create)
* everything is public always you cannot write private 
* other classes implements interface
* **multiple interface**
* cannot instanciate
* Loose coupling -> 
    Lets say you are using a parent class which is being extended by many other classes, as soon as the parent class changes children classess also do change
    but when you have an interface, when other classes are implementing it they have their own definition, if any class changes it's definition it doesn't matter for others
