# Union Find
    
This help us to split elememnts into one or more disjoint set which are connected/related to each other. It has two primary functions -> union() and find()
```
    find() -> find the group which elelment belongs to [parent]
    union() -> will merge the two groups 
```

There is rank for each element which will be 0
rank [0,0,0,0,0]
There is parent array of each element the parent of itself will be it
[1,2,3,4,5]

## union 
1. union u,v
2. find ultimate parent of both pu, pv
3. find rank of both pu, pv
4. attach smaller rank parent to bigger
5. If rank different
6.     no need to update rank but update parent of parent
7. If rank same then upadate rank and parent both

## find
1. return parent if current parent's parent is itself
2. otherwise do the find again
3. save the result as parent of itself for path compression
   
## path compression makes things more easier ->
make every element point to the alpha parent node make this change while inomelenting the find ,
**but if you want to access/use the final parent arr then you must call final(par[i]) as this will give you final paren**t **IMPVV**


find will always look for parent and it will stop when it gets the same value as key for parent 


we have parent and ranks map, parent map has always the parent, and rank will have the elements under it, but always try to keep parent the heighest herrach one as it will simplify the code, for newly added noce it's parent will be she itself and initial rank will be one , now we have to do union and find for each 


if ranks are same we can add at any positions 


 the one with greater rank will become parent for other one also it's rank will becme addition of it's rank + rank of second parent
 
```
 boolean union( HashMap<Integer,Integer> par ,HashMap<Integer,Integer> rank, int[]edge ){
        int p1= find(edge[0], par);
        int p2= find(edge[1], par );
        if(p1==p2) return false;

        if(rank.get(p1)>rank.get(p2)){
            par.put(p2, p1);
            rank.put(p1, rank.get(p2)+rank.get(p1));
        }else{
            par.put(p1,p2);
            rank.put(p2,rank.get(p2)+rank.get(p1));
        }
        return true;
     }


int find(int key, HashMap<Integer,Integer> par){
        if(key == par.get(key)) return key;
        int p = find(par.get(key), par);
        par.put(key, p); // here I'm updating the parent for path compression alpha parent will be the parent now
        return p;
    }

    ```

still not getting it its okay go here https://www.youtube.com/watch?v=aBxjDBC4M1U&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=47&ab_channel=takeUforward
