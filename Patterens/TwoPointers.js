// Two pointers: We use two indices (pointers) to solve a problem efficiently instead of nested loops.


//P#:1; Target Sum:   Sorted array, and it will gives the pairs whoes sum is equal to target

// ########### Opposite Dierction ###########
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






// Reverse and array 
function reverse(arr){
    let left = 0;
    let right = arr.length-1;


    while(left<right){
        [arr[right] , arr[left]] = [arr[left] , arr[right]]
        
        
        left++;
        right--
    }
      
    
    return arr;
   
   
}

// Is valid Palindrom 


function isVlidPalindrom(str){
    let left =0;
    let right = str.length-1;
    
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        
        left++;
        right--
    }
    
    return true;
}


// ################### Same Direction ##########

//array must be sorted 
function moveZeros(arr){
    let i = 0;
  
  for(let j=0; j<=arr.length-1; j++){
      if(arr[j]!==0){
          [arr[i], arr[j]] =[arr[j], arr[i]]
          i++
      }
  }
    
      return arr
   
}

