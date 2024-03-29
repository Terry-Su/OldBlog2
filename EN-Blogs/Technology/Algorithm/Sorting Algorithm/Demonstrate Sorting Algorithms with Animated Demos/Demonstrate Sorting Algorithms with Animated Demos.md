![](https://terry-su.github.io/BlogCDN/images/simpson-evolution.jpg)    

After learning common sorting algorithms, feel like demonstrating them using not only brief description but also animated demos.

Here contains 6 sorting algorithms, half are simple, half are advanced.
* Bubble sort
* Selection sort
* Insertion sort
* ~
* Merge sort
* Shell sort
* Quick sort



## Bubble sort
This maybe the simplest sort, notoriously slow though.  
Suppose we were arranging a queue of baseball players by their height. 
Start from leftmost.
1. compare two players 
2. if the one on the left is taller, swap them. Otherwise, no action.
3. move one position right

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/bubble-sort/index.html?mode=result" ></iframe>



## Selection sort
Start from leftmost too.
1. look for minimum player from current position to right
2. swap minimum player with the player at current position
2. move one position right

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/selection-sort/index.html?mode=result" ></iframe>



## Insertion sort
In most cases, this is the best of elementary sorts. It's about twice as fast as the bubble sort.  
The steps is somewhat complicated than sorts above.Start from leftmost.
1. partially sort left players
2. choose the first unsorted player as marked player
3. shift the players shorter than marked player to right
4. insert marked player into the previous  position of first shifted player.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/insertion-sort/index.html?mode=result" ></iframe>




## Merge sort
The heart of the merge sort algorithm are the merging of two already-sorted arrays and recursion.  
![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/800px-Merge_sort_algorithm_diagram.svg.png)

As shown in picture, main steps are:
1. Recur to split numbers into 2 parts
2. merge 2 parts

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/merge-sort/index.html?mode=result" ></iframe>



## Shell sort
The name "Shell sort" is named for Donald Shell, who discovered it. It's based on **insertion sort**, but adds a new feature that dramatically improves the insertion sort's performance.  

Main steps
1. divide array into groups by interval(3 for example) and sort them continously until all items are divided and sorted.
2. diminish the interval and continue to divide and sort until the interval becomes 1.

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/shell-sort/index.html?mode=result" ></iframe>




## Quick sort
In the majority of situations, this is the fastest sort.

1. choose a pivot(rightmost item)
2. partition the array into left sub array(smaller keys) and right sub array(larger keys)
3. recur step2 to left sub array and right sub array

<iframe src="https://terry-su.github.io/BlogCDN/iframes/algorithm/quick-sort/index.html?mode=result" ></iframe>

