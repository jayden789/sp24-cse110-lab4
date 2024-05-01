1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    **It prints out 3**

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    **It prints out 150**

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    **It prints out 150**

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
    **The function return a list of final (discounted) prices. Because the ```discounted``` is a function-scope variable, it still exists outside the for-loop block**

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5))
    **This gives error because ```i``` is a block-scope variable (using ```let```), so i does not exist anymore outside the for-loop**

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    **This gives error because ```discountedPrice``` is a block-scope variable (using ```let```), so i does not exist anymore outside the for-loop**

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    **It prints out 150, because ```finalPrice``` is still in the scope (of the block scope of function)**

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    **The function return a list of final (discounted) prices (```[ 50, 100, 150 ]```). Because the ```discounted``` is a block-scope variable, and it still inside its own block scope.**

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
    **This gives error because ```i``` is a block-scope variable (using ```let```), so i does not exist anymore outside the for-loop**

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    **It prints out 3**

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    **The function return a list of final (discounted) prices (```[ 50, 100, 150 ]```). We don't reassign ```discounted``` to another value but modifying it in place, so the code works fine.**

12. Given the above Object, write the notation for:  (These should be in your part2.md)
- Accessing the value of the name property in the student object: ```student.name```
- Accessing the value of the Grad Year property in the student object: ```student["Grad Year"]```
- Calling the function for the greeting property in the student object: ```student.greeting()```
- Accessing the name property of the object in the Favorite Teacher property in student: ```student["Favorite Teacher"]```
- Access index zero in the array of the courseLoad property of the student object: ```student.courseLoad[0]```

13.  
A. '32'

B.  1

C.  3

D. '3null'

E.  4

F.  0

G. '3undefined'

H.  NaN

15.  
A.  true

B.  false

C.  true

D.  false

E.  false

F.  true

17.  
A strict equality operator ```===``` checks the equality without type conversion, while equality operator ```==``` will do appropriate type conversion.

18.  
    Calling ```modifyArray([1, 2, 3], doSomething)``` will result in the array ```[2, 4, 6]```.

    It loops through each element in the original array, calling the provided function ```(doSomething)``` with that element as input. The result (doubles each element in this case) is added to a new array.
    
    Finally, the new array containing the modified elements is returned.

19.  

1

4

3

2

   



