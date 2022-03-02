//Merge Intervals (MEDIUM)

//Prompt: Given an array of intervals where intervals[i] = [starti, endi]
//merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Solution: Sort intervals, then loop and replace numbers that overlap. Push any non overlapping interval into result and return.
// Time: O(NLogN)
// Space: O(N)
var merge = function(intervals) {
  if (intervals.length === 1) return intervals //base case
  
  intervals.sort((a, b) => a[0] - b[0]);  //sort by the first number in each intervalpap
  const result = [intervals[0]];  //push in first interval into result array
  
  for (let interval of intervals){
      let end1 = result[result.length-1][1];  //end1 = endpoint of the last interval
      let start2 = interval[0];               //start2 = startpoint of current interval 
      let end2 = interval[1];                 //end2 = endpoint of current interval 
      
      if (end1 >= start2){                    //if end1 is more than or equal to start2, then we have overlap
          result[result.length-1][1] = Math.max(end1, end2);    
          //find max between end end1 (from results array) and end2 (from interval)
      } else {
          result.push(interval)   
          //if end1 is less than or equal to start2, then no overlap: push entire interval into array
      }
  }
  return result;
};

/*

1. Sort interval and loop through, looking only at current and next intervals
2. Create new array and add to it 
3. If next beginning interval is less than ending of current interval, we found overlap
4. Take out next beginning and replace current end with next end
5. Push intervals in results array if it doesn't need changing

                   s2  e2
Input =  [ [1, 3], [2, 6], [8, 10], [15, 18] ]

               e1                  ANSWER
Result = [ [1, 3] ] --> [ [1, 6], [8, 10], [15, 18] ]

https://leetcode.com/problems/merge-intervals/

*/
