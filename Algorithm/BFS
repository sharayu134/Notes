# When Level order traversal come in play use BFS

Only using **array** you can use the 
ls is the queue of the BFS but implemented by array 
**ls =[]**
**ls.append()**
**ls.pop(0)** // you need to provide the index given

```
def build(oi, ot):
        ls = [oi]
        nt = [] 
        while len(ls)>0:
            r = ls.pop(0) ///// here it's pop
            if ot[r] != None:
                nt.append(ot[r])
                if 2*r+1 < len(ot):
                    ls.append(2*r+1)
                if 2*r+2 < len(ot):
                    ls.append(2*r+2)
        return nt

    for p in pr:
        nt = build(p,tree)
        res.append(nt)
```
