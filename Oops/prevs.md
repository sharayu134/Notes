1. SOLID principle https://www.youtube.com/watch?v=_jDNAf3CzeY&ab_channel=Amigoscode
2.  **S** stands for single responsibilty, one class should be responsible for only single function
3.  **O** Open closed, open for extension and closed for moditification, is writing area for different shapes, create new class rectangle shapes which should implement are interface, so while adding any other shape, we can easily add a new shape and implement interface shape no need to change any existing class at all ![image](https://github.com/sharayu134/Notes/assets/43854821/3e9072dc-6e88-4ff4-b793-2f797cd2ff24)
![image](https://github.com/sharayu134/Notes/assets/43854821/359b528e-2fd0-4426-9883-cbcc6fe3d4de)

4.  **L** Liskov substitution every derived class should be substitutable by base class, ![image](https://github.com/sharayu134/Notes/assets/43854821/43342e7a-19ea-4272-a2ce-4296c653af41)
![image](https://github.com/sharayu134/Notes/assets/43854821/af23eb17-6ac6-4e4e-b5ba-42a496fe739f)
here this is what implemented is wrong
5. **I** Interface segration , interface should not be a large one but be separated in different smaller interfaces, now for calculating volume there should be a different interface to calculate volume as that's only for 3D objects
6.  **D** Dependency Inversion
7.  By including the @Qualifier annotation, together with the name of the specific implementation we want to use, in this example Foo, we can avoid ambiguity when Spring finds multiple beans of the same type.
8. Two dbs find primasry -> There's another annotation called @Primary that we can use to decide which bean to inject when ambiguity is present regarding dependency injection. This annotation defines a preference when multiple beans of the same type are present. The bean associated with the @Primary annotation will be used unless otherwise indicated.
9. https://www.tutorialspoint.com/hibernate/hibernate_caching.htm
10. https://www.tutorialspoint.com/difference-between-get-and-load-in-hibernate
