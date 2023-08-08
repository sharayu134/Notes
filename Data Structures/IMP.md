###  Do not ever initialize outside of a function in order to save the memory  it will not workk

## Comparator syntax

        ArrayList<String>ls = new ArrayList(map.values());
        Collections.sort(ls,((x,y)->{
            if(y.length() == x.length()) {
                return x.charAt(0) - y.charAt(0);
            }
            return y.length()-x.length();
        }));
