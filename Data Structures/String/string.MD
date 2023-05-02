## str.length()
##  String [] ar = str.split(" ");

        for(String s : ar){
            
            System.out.println(s);
        }
        
 ## str.contains("-") 
 
 ## Links 
 1. https://www.w3schools.com/java/java_ref_string.asp

## pattern for at least one digit /d -> using regex
  `
   import java.util.regex.*;Pattern p = Pattern.compile(".*\\d+.*");
   Matcher m = p.matcher(s);
   m.matches() //return true or false
   m.count()  //returns number
  `
