```
Integer a = new Integer("0"); or Integer a =0;
Integer b = new Integer("0"); or Integer b =0;

if(a==b) // will not work as Integer is object use equals or compareto as required
if(a.equals(b)) -> returns true if equal otherwise false

https://stackoverflow.com/questions/21795376/java-how-to-remove-an-integer-item-in-an-arraylist 
list.remove(Integer.valueOf(2)); // if you have to remove the value instead of index use Integr.valueOf();

int retval = a.compareTo(b);
      if(retval > 0) {
         System.out.println("a is greater than b");
      } else if(retval < 0) {
         System.out.println("a is less than b");
      } else { //(retval == 0)
         System.out.println("a is equal to b");
      }
      
     or simply use ((int) a == (int)b )
    
    ```
