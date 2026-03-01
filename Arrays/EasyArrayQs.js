// These are some Easy DSA questions in Arrays


/*
##########################################################################
           Find The Second Largest Element in an Array
##########################################################################
*/


function secondLargestElement(arr){

    let largest = -1;
    let secondLargest = -1

    for(let i=0; i<=arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
           
       
        }
         if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest = arr[i]
        
        }
    }
    return secondLargest


    return -1
}

/*
##########################################################################
            Find The Third Largest Element in an Array
##########################################################################
*/


function thirdlargestElement(arr){
let n = arr.length;

let first = -Infinity
let second = -Infinity
let third = -Infinity


for(let i=0; i<=n; i++){
    if(arr[i]>first){
        third = second
        second = first
        first =arr[i]
    }else if(arr[i]>second && arr[i]<first){
 
        third = second
        second  = arr[i]
    }else if (arr[i]<second && arr[i]>third){
        
        third =arr[i]
    }
}
return third


}


/*
##########################################################################
                     Reverse an Array (O(n), O(1))
##########################################################################
*/



function reverseArray(arr){
 
  let n = arr.length
   for(let i=0; i<=n/2; i++){
    [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]]
   }

   return arr
}


/*
##########################################################################
                  Reverse an Array
##########################################################################
*/


function rotateArray(arr,k){
   

    let n = arr.length
   for(let i=0; i<n; i+=k){

    let left = i

    let right = Math.min(i+k-1, n-1)
   
    while(left<right){
        [arr[right], arr[left]]  =[arr[left] , arr[right]]
        left++;
        right--
    }
    
}
    return arr


}


/*
##########################################################################
                     Reverse Array in Groups(O(n), O(1))
##########################################################################
*/


function rotateArray(arr, d){

 let n = arr.length;

 d%n

 let temp = new Array(n)

 for (let i=0; i<n-d; i++){
 temp[i] = arr[i+d]
 }


 for(let i=0; i<d; i++){
    temp[i+n-d] = arr[i]
 }

 for(let i=0; i<temp.length; i++){
    arr[i]  =temp[i]
 }

 return arr

}

