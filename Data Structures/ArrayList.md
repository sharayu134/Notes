Functions https://www.geeksforgeeks.org/arraylist-in-java/
 
 Arraylist provides a dynamic array that can be expanded when needed. 
 In Array, we have to specify the size of the Array during initialization, but it is not necessary for ArrayList. By default, it takes its size to 10.
 
 _> basically I'm dealing with dynamic array who will increase it's size twice as earlier size gets filled up
 
 https://www.javatpoint.com/java-arraylist
 
 ### Collections.min(myList))
 ### Collections.sort(myList))

 list.remove(Integer.valueOf(2)); use always Integer.valueOf() if you want to remove the value and not index
 list.remove(2) will remove the element at index 2

 ### Comparator
 
        ArrayList<String>ls = new ArrayList(map.values());
        Collections.sort(ls,((x,y)->{
            if(y.length() == x.length()) {
                return x.charAt(0) - y.charAt(0);
            }
            return y.length()-x.length();
        }));

