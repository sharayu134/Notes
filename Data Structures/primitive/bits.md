Using Bit Manipulation -

As we know XOR operation with 0 gives the same number
i.e, a XOR 0 = a
eg, for decimal no. 2=> 2 XOR 0 = 2
in binary, 010 XOR 000 = 010

Also we know that , XOR operation with same number gives 0
i.e, a XOR a = 0
eg, 2 XOR 2 = 0
in binary, 010 XOR 010 = 000

XOR is associative (like sum)
i.e, (2 XOR 3) XOR 4 = 2 XOR (3 XOR 4), So the order doesn't matter in performing XOR operation.
eg, 2^3^4^6 = 3^2^6^4 = 4^2^6^3 ......

So, using these three properties of XOR , we will solve the question. we will take ans variable with 0 as initial value. And then for each element i in array, we will perform the XOR operation of the element with 0, ans will become 0 if the same number is found (as a XOR a = 0) and so after the completion of the loop, only element with no duplicate number will remain and will be returned as ans.

Bitwise AND (&): Performs a bitwise AND operation on two numbers. Each bit of the result is 1 only if the corresponding bits of the operands are both 1.


Bitwise OR (|): Performs a bitwise OR operation on two numbers. Each bit of the result is 1 if at least one of the corresponding bits of the operands is 1.


Bitwise XOR (^): Performs a bitwise XOR operation on two numbers. Each bit of the result is 1 if the corresponding bits of the operands are different.


Bitwise NOT (~): Performs a bitwise NOT operation on a number. It inverts all the bits of the number.
Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions. Zeroes are filled in from the right.


Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions. Zeroes or ones are filled in from the left, depending on the sign of the number.


x = 5  # Binary: 0101
y = 2  # Number of positions to shift
result = x << y
print(result)  # Output: 20 (Binary: 10100)


x = 20  # Binary: 10100
y = 2  # Number of positions to shift
result = x >> y
print(result)  # Output: 5 (Binary: 0101)
