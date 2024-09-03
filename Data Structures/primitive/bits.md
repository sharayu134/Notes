
Bitwise AND (&): Performs a bitwise AND operation on two numbers. Each bit of the result is 1 only if the corresponding bits of the operands are both 1.


Bitwise OR (|): Performs a bitwise OR operation on two numbers. Each bit of the result is 1 if at least one of the corresponding bits of the operands is 1.


Bitwise XOR (^): Performs a bitwise XOR operation on two numbers. Each bit of the result is 1 if the corresponding bits of the operands are different.


Bitwise NOT (~): Performs a bitwise NOT operation on a number. It inverts all the bits of the number.


Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions. Zeroes are filled in from the right. (multiply by 21)


Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions. Zeroes or ones are filled in from the left, depending on the sign of the number. (divide by 2)

```
  x = 5  # Binary: 0101
  y = 2  # Number of positions to shift
  result = x << y
  print(result)  # Output: 20 (Binary: 10100)
  
  
  x = 20  # Binary: 10100
  y = 2  # Number of positions to shift
  result = x >> y
  print(result)  # Output: 5 (Binary: 0101)

```

https://www.youtube.com/watch?v=qQd-ViW7bfk&list=PLgUwDviBIf0rnqh8QsJaHyIX7KUiaPUv7

# 2' complement of a  => (a & (-a))
Try below with pen and paper take example a =13


Setting ith bit in a 
1. 1<<i   
2. a | (1<<i)



Clearing ith bit in a
1. 1<<i
2. ~(1<<i)
3. a &  (~(1<<i))

Toggling ith bit in a
1. 1<<i
2. a ^ (1<<i)

Last set bit Removal in a
1. a&(a-1)

Check if number is power of 2 [only one 1 in binary]
1. a&(a-1) is 0

# IIMP
https://leetcode.com/discuss/interview-question/3695233/all-types-of-patterns-for-bits-manipulations-and-how-to-use-it

There is an interview tip for bit manipulation problems: if you don't know how to start, start by computing XOR for your input data.
