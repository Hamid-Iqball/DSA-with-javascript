// Two pointers: We use two indices (pointers) to solve a problem efficiently instead of nested loops.


//      P#:1; Target Sum:   Sorted array, and it will gives the pairs whoes sum is equal to target

function targetSum(arr , target){

    let left = 0;
    let right = arr.length-1;
    let result =[]
    while(left<right){
        let sum = arr[left] + arr[right]
        if(target === sum ){
            result.push([arr[left] , arr[right]])
            right--;
            left++
        }
        else if(sum > target){
            right--
        }else{
            left++
        }



    }

    return result;

}


targetSum([1,2,3,4,5,7,10], 11)