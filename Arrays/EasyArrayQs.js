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







