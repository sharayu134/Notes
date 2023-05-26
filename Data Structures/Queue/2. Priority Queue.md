### PriorityQueue<Integer> q = new PriorityQueue(k); // if decreasing pass Collections.reverseOrder() or comparator
  
  ### q.add(4); to add element to q
  
  ### q.size(); size of ele
  
  ###  q.peek(); will return int
  
  ### q.poll will remove and return , null if empty
  
  # priority queue with comparator 
  
  ### PriorityQueue<int[]> q = new PriorityQueue<>((x,y)->Integer.compare((x[0]*x[0]+x[1]*x[1]),(y[0]*y[0]+y[1]*y[1])));
  ### PQ<type> q = new PQ <Nothing is here but it is compulsory for priority queue> ((x,y)-> y-x); // reverse
  ### PQ<type> q = new PQ <compulsory> ((x,y)-> Integer.compare(x,y));
  ### PQ<type> q = new PQ <compulsory> ((x,y)-> x.compareTo(y));
  ### PriorityQueue<Pair<Integer,Integer>>pq = new PriorityQueue<>((a,b)->b.getKey()-a.getKey()); vvimp IF REQURED TO USE A CLASS WITH TWO FIELDS this is helpfull as it has the getter alrady
  
