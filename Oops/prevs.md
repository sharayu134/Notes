1. By including the @Qualifier annotation, together with the name of the specific implementation we want to use, in this example Foo, we can avoid ambiguity when Spring finds multiple beans of the same type.
2. Two dbs find primasry -> There's another annotation called @Primary that we can use to decide which bean to inject when ambiguity is present regarding dependency injection. This annotation defines a preference when multiple beans of the same type are present. The bean associated with the @Primary annotation will be used unless otherwise indicated.
3. 
