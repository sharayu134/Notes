1. String[] cars;
2. String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
3. System.out.println(cars.length);


for (int i = 0; i < cars.length; i++) {
  System.out.println(cars[i]);
}


String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}

int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };

 for (int i = 0; i < myNumbers.length; ++i) {
      for(int j = 0; j < myNumbers[i].length; ++j) {
        System.out.println(myNumbers[i][j]);
        
 ## convert array to list 
 ###  List<String> ls = Arrays.asList(cars); 
 
 ## convert List to array 
  List<String> names = new LinkedList<String>();  
  names.add("James");  
   names.add("Robert");  
    names.add("Mery");
  ### String[] namesArray = names.toArray(new String[0]) 
