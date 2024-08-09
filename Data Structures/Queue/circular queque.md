# Circular Queue with Array


Other than the deque data structure, one could also apply another fun data structure called circular queue, which is basically a queue with the circular shape.


https://leetcode.com/problems/moving-average-from-data-stream/Figures/346/346_circular_queue.png


The major advantage of circular queue is that by adding a new element to a full circular queue, it automatically discards the oldest element. Unlike deque, we do not need to explicitly remove the oldest element.
Another advantage of circular queue is that a single index suffices to keep track of both ends of the queue, unlike deque where we have to keep a pointer for each end.
Algorithm


No need to resort to any library, one could easily implement a circular queue with a fixed-size array. The key to the implementation is the correlation between the index of head and tail elements, which we could summarize in the following formula:


tail=(head+1)modsize


In other words, the tail element is right next to the head element. Once we move the head forward, we would overwrite the previous tail element.


https://leetcode.com/problems/moving-average-from-data-stream/Figures/346/346_snake.png
