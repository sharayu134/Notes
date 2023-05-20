```  boolean union( HashMap<Integer,Integer> par ,HashMap<Integer,Integer> rank, int[]edge ){
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
        par.put(key, p);
        return p;
    }
    ```
