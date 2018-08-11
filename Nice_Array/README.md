## CodeWar Challenge 06
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.
I.E : [2,10,9,3] is Nice array because
        2=3-1
                10=9+1
                        3=2+1
                                9=10-1
https://www.codewars.com/kata/nice-array/train/javascript

We need to loop through the array and find each index and return the condition is true (n+1 or n-1) or false.
