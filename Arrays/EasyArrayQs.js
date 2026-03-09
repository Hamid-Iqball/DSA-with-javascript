// These are some Easy DSA questions in Arrays


/*
##########################################################################
        1   Find The Second Largest Element in an Array
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


}

/*
##########################################################################
        2    Find The Third Largest Element in an Array
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
            3      Reverse an Array (O(n), O(1))
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
          4        Reverse an Array in groups
##########################################################################
*/


function reverseAnArrayinGroups(arr,k){
   

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
          5           Rotate an Array
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


/*
##########################################################################
          6    Three Great Candidates
##########################################################################
*/


function triplateProducts(arr){

 let n =arr.length
 let maxA = Number.MIN_SAFE_INTEGER
 let maxB = Number.MIN_SAFE_INTEGER
 let maxC = Number.MIN_SAFE_INTEGER


 let minA  =Number.MAX_SAFE_INTEGER
 let minB  =Number.MAX_SAFE_INTEGER



 for(let i=0; i<n; i++){
    if(arr[i]>maxA){
        maxC = maxB;
        maxB = maxA;
        maxA = arr[i]
    }else if(arr[i]<maxA && arr[i]>maxB){
        maxC= maxB
        maxB = arr[i]
    }else if(arr[i]<maxB && arr[i]>maxC){
        maxC = arr[i]
    }



    if(arr[i]<minA){
        minB = minA
        minA = arr[i]
    }else if(arr[i]<minB){
        minB = arr[i]
    }

    console.log(maxA,maxB,maxC)

 }


 let product = Math.max(minA*minB*maxA, maxA*maxB*maxC)


 return product;
}



/*
##########################################################################
        7) Maximum consecutive one’s (or zeros) in a binary array
##########################################################################
*/

function maximum(arr){
 
    let n = arr.length;
    if(!n) return null
    let count=1
    let maxCount =0

    for(let i=0; i<n; i++){
        if(arr[i]===arr[i-1]){
            count++
        }else{
           maxCount = Math.max(maxCount, count)
            count=1
        }

    }
 return Math.max(maxCount,count)
   
}

/*
##########################################################################
        7) Move all zeros to end
##########################################################################
*/


function moveZeros(arr){

if(arr.length===0) return
let i=0;
for(let j=0; j<arr.length; j++){
    if(arr[j]!==0){
        [arr[i], arr[j]] =[arr[j], arr[i]]
        i++
    }
}

return arr

}

/*
##########################################################################
        8) Wave form
##########################################################################
*/


function waveForm(arr){
    
    if(!arr.length) return null
    let j=1
    for(let i=0; i<arr.length ; i+=2){ // this i=i+2 is the tricky part
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
    
    return arr
}


/*
##########################################################################
        9) Plus One
##########################################################################
*/

function plusOne(arr){
    
    let n =arr.length
    let carry = 1
    
    for(let i=n-1; i>=0; i--){
        let sum = arr[i]+carry
        arr[i] = sum%10
        carry = Math.floor(sum/10)
    }
    
    
    if(carry>0){
        arr.unshift(carry)
    }
    
    return arr
    
}

/*
##########################################################################
        10) Stock Buy and Sell (single Transaction)
##########################################################################
*/

function maxProfit(arr){
    
    let n= arr.length
    let minPrice =arr[0]
    let res=0
    
    for(let i=0; i<n; i++){
        minPrice = Math.min(arr[i], minPrice)
        
        
        res = Math.max(res,arr[i]-minPrice)
    }
    return res
}


/*
##########################################################################
        10) Stock Buy and Sell (Multiple Transactions)
##########################################################################
*/

function maxProfitMany(arr){
    
    let n = arr.length
    let res=0
    for(let i=1; i<n; i++){
        if(arr[i]>arr[i-1]){ // we only count the upward counts and hence delete the previous one from it and adding it so it gives us the complete profit
            res+=arr[i]-arr[i-1]
        }
    }
    
    return res
}

maxProfitMany([100, 180, 260, 310, 40, 535, 695])



/*
##########################################################################
        10) Remove Duplicates from Sorted Array
##########################################################################
*/

function removeDuplicate(arr){
    
    let n=arr.length;
    if(n===0) return null
    
    let idx =1
    for(let i=1; i<n; i++){
        if(arr[i]!==arr[i-1]){
            arr[idx] =arr[i]
            idx++
        }
    }
    
    return arr.slice(0,idx)

}

removeDuplicate([1, 2, 2, 3, 4, 4, 4, 5, 5])


/*
##########################################################################
        11) Array Leaders
##########################################################################
*/

function Leader(arr){

    let n =arr.length
    let result =[]

    for(let i=0; i<n; i++){
      let j
      for(j=i+1; j<n; j++){
        if(arr[i]<arr[j])
            break
      }


      if(j===n){
        result.push(arr[i])
      }

    }

    return result
}



function Leader2(arr){

    let n=arr.length
    let maxRight = arr[n-1]
    let result =[]

    result.push(maxRight)
    for(let i=n-2; i>=0; i--){
    
        if(arr[i]>=maxRight){
            maxRight = arr[i]
            result.push(maxRight)
         
        }

    }
    result.reverse()

    return result
}





//unsorted array
function findTwoElement(arr){

    let n = arr.length

    let freq = new Array(n+1).fill(0)
    let repeating =-1 
    let missing  = -1


    for(let i=0; i<n; i++){
        freq[arr[i]]++
    }

    for(i=0; i<=n; i++){
        if(freq[i]===0) { missing = i
        }else if(freq[i]===2){
            repeating =i
        }
        
    }

    return [missing, repeating]

}


function findtwoElements2(arr){
    let n = arr.length
   let repeating=-1
    
    for(let i=0; i<n; i++){
        let val =  Math.abs(arr[i])


        if(arr[val-1]>0){
            arr[val-1] = -arr[val-1]
        }else{
            repeating = val
        }
    }



    let missing = -1

    for(let i=0; i<n; i++){
        if(arr[i]>0){
            missing = i+1;
            break
        }
    }
        
    return [repeating, missing]
        
}

console.log(findtwoElements2([3,4,1,5,5]))