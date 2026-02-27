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





