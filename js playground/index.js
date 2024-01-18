// nameShuffler('john McClane'); => "McClane john"
//code wars problems 
// shuffle name 
function nameShuffler (name) {
    let newOrder = name.split(' ').reverse().join(' ')

    // console.log(newOrder)
}
nameShuffler('john McClane')

// remove exclamation from end of sentence 
function remove (string) {  
    let newWord = string.replace(/!+$/g, '')
    console.log(newWord)
    return newWord;
  }
//   remove('Hi!')

  //turn a string to camelCase
function camelCase (string) {
    let word = string.replace(/-|_+/g, ' ').split(' ')
    word1 =word.shift()
    word2 = word.splice(0).map((word) => word.charAt(0).toUpperCase()+ word.slice(1)).join('')
    word3 =word1 + word2
    
    console.log(word3)
}
// camelCase('the-works-three')

// let principal = this.targets.find("principal").value
// let interest = this.targets.find("interest").value
// let years = this.targets.find("years").value
// // let amount = principal * ((1 + (interest/100)) ** years)
// let annual = this.targets.find("annual").value

// this.targets.find("amount").innerHTML = "The amount you will have is: $" + amount 

let principal = 100
let interest = 2
let years = 10
let amount = 0
let annual = 5
// console.log(principal, years, interest, annual)
// let newPrincipal = 0
//  for (i = 0; i < years; i++){
//     newPrincipal = annual + (principal * (1 + (interest/100)))
//     principal = newPrincipal
//     amount = principal
//     console.log(newPrincipal, principal)        
// }
    

// console.log(amount, 'works')


function fizzBuzz(n) {
    // Write your code here
  
        for (let i = 1; i<=n; i++) {
            if( i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz')} 
            else if ( i % 3 === 0 ) { console.log('Fizz') } 
            else if ( i % 5 === 0)  console.log('Buzz')   
            else  console.log(i)
            
            }
    }
     
// fizzBuzz(15)

function matchingBraces(braces) {
    // Write your code here
    const matchSquare = '[]'
    const matchCurly = '{}'
    const matchParenth = '()'
    console.log(braces)
    let newArray = braces.toString().split(',')
    console.log(newArray)
    
}

// matchingBraces(['{}[]()', '(){]}'])

// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area
// between two points such that no points are inside the area.
// A vertical area is an area of fixed-width extending infinitely along the y-axis 
// (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.
var maxWidthOfVerticalArea = function(points) {
    let width = points.length - 1
    points.sort()
    console.log(points, width)

   points.forEach(point => {
    let x = point[0]
    console.log(x)
   })
   
};

// maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])

// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function(nums, target) {
    for (let i = 0; i<nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
            if (nums[i] + nums[j] == target) return [i,j]
        }
    }
     
  }; 

///////////////////////////////////////////////////////////////////////////////////////////////////
// 2024 

  // You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
  // starting with word1. If a string is longer than the other, append the additional letters onto the 
  // end of the merged string. Return the merged string.

  var mergeAlternately = function(word1, word2) {
    let word1Array = word1.split("");
    let word2Array = word2.split("")
    let newWord = []

    if (word1.length + word2.length < 1 || word1.length + word2.length > 100 ) 
        return 'A word size does not meet minimum or maximum requirements.'
    if (word1Array.length == word2Array.length) {
        for (let i = 0; i<word1Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
        }
        return newWord.join('')
   } else if (word1Array.length > word2Array.length) {
        for (let i = 0; i<word1Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
         }
        return newWord.join('')
   } else if (word1Array.length < word2Array.length) {
        for (let i = 0; i<word2Array.length; i++){
            newWord.push(word1Array[i])
            newWord.push(word2Array[i])
         }
        return newWord.join('')
   }
};

// mergeAlternately("morewords", "evenmorewords")

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t 
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function(str1, str2) {
   

    // if (str1.split("").at(0) != str2.split("").at(0)){
    //     return ""
    // } else if (str1 + str2 != str2 + str1 ) {
    //     return ""
    // } else if (str1 + str2 == str2 + str1 ){
    //     for (let i = 0; i<str2Length; i++){
    //         let base = str1.charAt(0)
    //         let base2 = str1.substring(base, i)
    //         let base3 = str2.substring(base, i)
    //         console.log(gcd, base, base2, base3)
    //         let base4 = base3.charAt(gcd)
    //         if (base == base3.charAt(gcd) && i > 1) {
    //           return  str1.substring(0, gcd), console.log(str1.substring(0, gcd), "me")
    //         } else if ( base2 == base3 && base != base3.charAt(gcd) ){
    //              gcd++
    //         }
             
    //     }
    // }
    // return console.log(str1.substring(0, gcd))

    let str1Length= str1.length
    let str2Length= str2.length
    let gcd = Math.min(str1.length, str2.length)

    if (str1.split("").at(0) != str2.split("").at(0)){
        return ""
    } else if (str1 + str2 != str2 + str1 ) {
        return ""
    } else 
        for (let i = gcd; i > 0; i--) {
                if (str1Length % i == 0 && str2Length % i == 0){
                    return str1.substring(0,i), console.log(str1.substring(0,i) )
            }
        }
        
};


// gcdOfStrings("ABABAB", "ABAB")

// You have a long flowerbed in which some of the plots are planted, 
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
// and an integer n, return true if n new flowers can be planted in the flowerbed
//  without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function(flowerbed, n) {
    // tried so many ways to solve this correctly and I way overcomplicated it. so I looked at the
    // editorial and discussion boards and saw an explanation that simplified it. gave it a night
    // and came up with the following

    //there is no need to use a seperate counter only verification is needed
    // if the conditions are true n can be reduced by 1 showing a seed was planted in the available slot
    // the key thing I missed was manipulating the array and changing the current pod to 1
    // //////////////////////// SOLUTION
    let leftPod = -1
    let currentPod = 0
    let rightPod = 1
   
        for(i = currentPod; i < flowerbed.length; i++, leftPod++, rightPod++){
            console.log('loop')
            if (flowerbed[i] == 0 && flowerbed[rightPod]!= 1 && flowerbed[leftPod] != 1){
                flowerbed[i] =1,
                console.log(flowerbed[leftPod], flowerbed[currentPod], flowerbed[rightPod], "updated"),
                n--,
                console.log(n, 'seeds')

            }
        }

    
        if (n<=0) {
            return true, console.log(true)
        } else {
            return false, console.log(false)
        }
///////////////////////////////////////    ATTEMPTS

    // let flowerNumber = 0
    // let emptySpace = 0
    // let flowerSpots= flowerbed.length -1

    // console.log(flowerSpots, flowerbed.length)
    // let emptySpace = 0
    // let planted = 0
    // let flowers = 1
    
    //  if (flowerbed[0] == 0 && flowerbed[1]==0 && flowerbed.length!=2) {
    //          planted++ 
    //     }
    // for (let i = 0; i<flowerbed.length; i++){
    //     if(flowerbed[i]==0){
    //         emptySpace++
    //     }
    //     if (flowerbed[i]){
    //         flowers++
    //     }
    //     if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0){
    //         planted++
           
    //     }
    // }   
    // if (planted>=n){
    //     return true, console.log(true, emptySpace, planted)
    // } else {
    //     return false, console.log(false)
    // }

    
    // if (flowerbed[0] == 0 && flowerbed[1]==0 && flowerbed.length!=2) {
    //        emptySpace++   
    //    }
    // for (let i = 0; i<flowerbed.length; i++){
    //     console.log(flowerbed[i])
    //     // if (flowerbed[i] == 0) {
    //     //      console.log('empty')
    //     // }
    //     if (flowerbed[i] == 0) {
    //         flowerNumber++, console.log('flower')
    //     }
    //     if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0) {
    //         emptySpace++, console.log(emptySpace)
    //         if (flowerbed[i+2]==0) {
    //             i++, console.log('jumping', flowerNumber)
                
    //         }
    //     } 
        
    // }
    // if (flowerbed[flowerSpots-1] == 0 && flowerbed[flowerSpots]==0) {
    //     emptySpace++   
    // }
    // if (emptySpace>=n && flowerNumber < emptySpace){
    //     return true, console.log(true, emptySpace)
    // } else {
    //     return false, console.log(false, emptySpace)
    // } 
//    for (let i = 0; i< flowerbed.length; i++){
//         console.log(flowerbed[i])
//         if (flowerbed[i] == 1){
//             planted++
//         }
//         if (flowerbed[i]==0){
//             flowerNumber++
//         }
//         if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0) {
//            emptySpace++, console.log(emptySpace, 'me') 
//         } 
//     }
//     if (emptySpace == n && emptySpace != flowerNumber/emptySpace){
//         return true, console.log (true)
//     }    else{
//     return false, console.log(false)
//     }
// };


// for (let i = 0; i< flowerbed.length; i+2){
//     console.log(flowerbed[i])
//     // if (flowerbed[i] == 1){
//     //     planted++, console.log("three")
//     // }
//     // if (flowerbed[i]==0){
//     //     flowerNumber++, console.log(flowerNumber, "too")
//     // }
//     if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0) {
//        emptySpace++, console.log(emptySpace, "me")
//     } 
// }
// if (emptySpace < n){
//     return false
// }   else if (emptySpace == n && emptySpace != flowerNumber/emptySpace || flowerNumber % 2 != 0){
//     return true
// } else if (n == flowerNumber - planted){
//     return false, console.log(false)
// } else {
//     return false, console.log(false)
// }
// };

// for (let i = 0; i< flowerbed.length; i++){
//     console.log(flowerbed[i])
//     if (flowerbed[i] == 1){
//         planted++
//     }
//     if (flowerbed[i]==0){
//         flowerNumber++
//     }
//     if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0) {
//        emptySpace++
//     } 
// }
// if (emptySpace < n){
// return false
// }   else if (emptySpace == n && emptySpace != flowerNumber/emptySpace || flowerNumber % 2 != 0){
// return true
// } else if (n == flowerNumber - planted){
// return false
// } else {
// return false
// }

//     for (let i = 0; i< flowerbed.length; i+=2){
//         console.log(flowerbed[i])
//         if (flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1]==0) {
//         emptySpace++, console.log(emptySpace, "me")
//         } 
//         }
//     if (emptySpace>=n) {
//         return true, console.log(true)
//     } else {
//         return false, console.log(false)
//     }

};

// canPlaceFlowers([0,0,0,0,0], 3 )

// There are n kids with candies. You are given an integer array candies, 
// where each candies[i] represents the number of candies the ith kid has, 
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, 
// after giving the ith kid all the extraCandies, 
// they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    let highestNumberOfCandies = Math.max(...candies)
    let numberOfKids = candies.length
    // let highestNumberOfCandies = highNumber
    console.log(numberOfKids, highestNumberOfCandies)
    let kids =[]
    candies.forEach((kid)=>{
        if (kid + extraCandies >= highestNumberOfCandies){
            kids.push(true)
            console.log(kid)
        } else{
            kids.push(false)
            console.log(kid)
        }
        
    })
    console.log(kids)
};

// kidsWithCandies([2,3,5,1,3], 1)

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

var reverseVowels = function(s) {
// take the string split into array
// verify if letter at index is a vowel a e i o u
// reorder vowels
// return array to string
    s = s.split("")
    let vowelArray = []
    let indexArray = []
    for(i = 0; i<s.length; i++){
        if(s[i] == 'a' || s[i] == "e" || s[i] =="i" || s[i] =="o" || s[i] == "u"
        || s[i] == 'A' || s[i] == "E" || s[i] =="I" || s[i] =="O" || s[i] == "U"){
            console.log(i ,true)
            vowelArray.push(s[i])
            indexArray.push(i)
            console.log(vowelArray, indexArray)
        }
    }
    vowelArray.reverse()
    for (j=0;j<vowelArray.length;j++){
        s.splice(indexArray[j],1, vowelArray[j])
    }
    s.join("")
    return s, console.log(s)

};

// reverseVowels("hEllo world")

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. 
// Do not include any extra spaces.

var reverseWords = function(s) {
   let reverse = s.split(' ').reverse()
    console.log(reverse.length)
     do{
       for (i = 0; i<reverse.length; i++){
        if (reverse[i]== ' ' || reverse[i]== ''){
            reverse.splice(i, 1)
        }
       }
      } while (reverse.includes(''))
      console.log(reverse.join(' '))
    return reverse.join(' ')


}

// reverseWords("  the sky is blue ")

// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums 
// is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in 
// O(n) time and without using the division operation.

var productExceptSelf = function (nums) {
//   THE FOLLOWING uses O(n^2) time first solution
    
    // let currentProduct = null
    // const numberArray = nums
    // for (i=0; i<nums.length; i++){
    //     console.log(numberArray)
    //     let tempArray = numberArray.slice(0)
    //     console.log(tempArray,'currentarray')
    //     console.log(tempArray[i], 'index')
    //     tempArray.splice(i, 1)
    //     console.log(tempArray, 'new array')
    //     currentProduct = tempArray.reduce((accumlator, currentValue)=>
    //     accumlator * currentValue)
    //     console.log(currentProduct,'product')
    //     productArray.push(currentProduct)
    //     tempArray = numberArray.slice(0)
    //     console.log(tempArray, 'reset')
    // }
    // console.log(productArray)
    // return productArray
//  THIS SOLUTION USES O(n) time
// rather run nested loops making the same calculations over and over calculating 
// every single product
//  we can get the products by calculating all the products to the left 
// then all the products to the right and the calulate the product of each 
// thus giving us the correct product for each index
let productArray =[]
let leftProduct = 1;
let rightProduct = 1;
for (let i = 0; i < nums.length; i++) {
  productArray[i] = leftProduct
  leftProduct *= nums[i]
}

for (let i = nums.length - 1; i >= 0; i--) {
    productArray[i] *= rightProduct
    rightProduct *= nums[i]
}

console.log(productArray)

return productArray;

};

// productExceptSelf([1,2,3,4])


// Given an integer array nums, return true  if there exists a triple of indices (i, j, k) 
// such that i < j < k and nums[i] < nums[j] < nums[k]. // If no such indices exists, return false.

var increasingTriplet = function(nums){

    let lowMarker = Infinity
    let midMarker = Infinity
    for (let current of nums){
        if (current > midMarker){
            return true
        }
        if(current > lowMarker){
            midMarker = current
        } else {
            lowMarker = current
        }
    }
    return false

    // for (i = 0; i< nums.length; i++) {
    //     console.log(lowMarker, midMarker)
    //     if (nums[i] <= lowMarker) {
    //         lowMarker = nums[i]
    //     }else if (nums[i] <= midMarker && midMarker > lowMarker){
    //         midMarker = nums[i]
    //     } else{
    //         return true
    //     }
    // }


    // let lowMarker = null
    // let midMarker = null
    // let highMarker = null
    // let lowestIndex = null
    // let middleIndex = null
    // let highestIndex = null
    // let trueCondition = 0
    // if (nums.length<3 || 0 === nums.length) return false
    // for (i = 0, j = 1, k = 2; i<nums.length; i++, j++, k++){
    //     if (nums[i] < nums[j] && nums[j] < nums[k]) {
    //         trueCondition+=1, true 
    //         // console.log(nums[i], nums[j], nums[k])
    //         //   if any three in a row are true
    //     }
        // if (nums[i] < nums[j] && nums[j] > nums[k]) {
        //     lowMarker = nums[i]
        //     lowestIndex = nums[i]
        //     midMarker = nums[j]
        //     middleIndex = nums[j]
        //     // break
        // }
        // if (nums[lowestIndex] < nums[j] && nums[j] < nums[k]) {
        //     middleIndex = nums[j]
        //     midMarker = nums[j]
        //     trueCondition+=1
        // }
    //     if (nums[i] < nums[j] && lowestIndex > i) {
    //         lowestIndex = nums[i]
    //     }
    //     if(nums[j] < middleIndex){
    //         middleIndex = nums[j]
    //     }
    //     if (nums[j] < nums[k]) {
    //         highestIndex = nums[k]
    //     }
    //     console.log(nums[i], nums[j],nums[k],' nums')
    //     console.log(lowestIndex, 'low', lowMarker)
    //     console.log( middleIndex, 'middle', midMarker)
    //     console.log(highestIndex,  'high')

    // }
    // (lowestIndex < middleIndex && middleIndex < highestIndex) ? ( trueCondition+=1, console.log(true)) : (false,console.log(false))
    // return (trueCondition>=1)? true : false

    // return (trueCondition>=1)? true : false, console.log((trueCondition>=1)? true : false) 
    // let k =  2
    // let j = 1
    // let i = 0
    // let trueCondition = 0
    // let firstConditionIndex = 0 
    // let secondConditionIndex = 0
    
    // if (nums.length<3 || i === nums.length) return false
  
    //     for(i = 0; i<nums.length; i++, j++, k++){
    //           if (nums[i] < nums[j] && nums[j] < nums[k]) {
    //             trueCondition+=1, true            ,
    //             console.log(nums[i], nums[j], nums[k])               
    //         }
    //         if (nums[i] < nums[j] && nums[j] > nums[k]) {
    //             firstConditionIndex = i
    //             secondConditionIndex = j
    //             console.log(firstConditionIndex)
    //             // break
    //         }
          
    //     }  
    //     console.log("starting")      
    //     if (trueCondition>=1) return true   
    //     for ( i = secondConditionIndex, k = secondConditionIndex + 1; k<nums.length;i++, k++){
    //                 secondCondition =(nums[firstConditionIndex] < nums[secondConditionIndex] 
    //                 && nums[secondConditionIndex] < nums[k]) ? (trueCondition+=1) : false
    //                 console.log(nums[firstConditionIndex], nums[k], secondCondition, 'working')
    //                 thirdCondition = (nums[firstConditionIndex] < nums[i] 
    //                 && nums[i] < nums[k]) ? (trueCondition+=1) : false
    //             }
  
    //     return (trueCondition>=1)? true : false, console.log((trueCondition>=1)? true : false) 
};

// increasingTriplet([9,10,5,11,10,9,8])

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, 
// be stored in the input character array chars. Note that group lengths that are 10 or longer 
// will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

var compress = function(chars) {
    // let group = 0
    // let groupCounter = 0
    // let s = []
    // for (let i = 0; i<chars.length; i++) {
    //     console.log('starting')
    //     s.push(chars[i])
    //     groupCounter= i+1
    //     console.log(chars[i], chars[groupCounter], 'current CHARACTERS')
    //     do { if (chars[i] == chars[groupCounter]){
    //         console.log(chars[groupCounter], chars[i], 'next set')
    //         groupCounter++
    //         console.log(groupCounter,'count')
    //     }
    //     } while (chars[group] ==chars[groupCounter])
    //     group = groupCounter - i
    //     console.log(group, 'GROUP')
    //     s.push(group)
    //     console.log(s, i)
    //     }   
        
    //     console.log(s.length)


//  Final solution took about an hour to get to this
    let i = 0, j = 0;
    while (i < chars.length) {
        chars[j++] = chars[i];
        let count = 1;
        while (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            i++;
            count++;
        }
        if (count > 1) {
            for (let digit of count.toString()) chars[j++] = digit;
        }
        i++;
    }
    console.log(j)
    return j;
}

// compress(["a","a","b","b","c","c","c"])

// Given an integer array nums, move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
var moveZeroes = function(nums) {
    let zeros = null
//    this bit is unnecessary as I can count the zeros as I splice
    // nums.forEach((num) => {
    //     if (num ==0) zeros++
    // })
    for (i=0;i<nums.length; i++){
        if (nums[i] == 0){
            nums.splice(i,1)
            i--
            zeros++
        }
    }
      while(zeros >0){
        nums.push(0)
        zeros--
    }
    console.log(nums)
  
    return nums
};

// moveZeroes([0,1,0,3,12])

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
//  of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s,t){
    let j = 0
    let i = 0

    while(i < s.length && j < t.length){
        if (s[i] == t[j]){
            i++
        } 
        if (i == s.length){
         return true
        
        } else {
            j++
        }
      
    }
    console.log((i == s.length) ? true : false)
    return false

//  THE FOLLOWING WAS THE FASTEST RUNTIME ON LEETCODE
    // if(s.length > t.length) return false;

    // const t_length = t.length;
    // let subsequence = 0;

    // for(let i=0; i<t_length; i++) {
    //     if(s[subsequence] === t[i]){
    //         subsequence++;
    //     }
    // }
    // return subsequence === s.length;
};

// isSubsequence('abc', 'ahbgdc')

// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
function maxArea(height) {
    let maxWater = 0;
    let left = 0
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const width = right - left;
        const area = h * width;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); 

// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

var maxOperations = function(nums, k) {
    const numCount = new Map();
    let operations = 0;

    for (const num of nums) {
        const complement = k - num;

        if (numCount.get(complement) > 0) {
            operations++;
            numCount.set(complement, numCount.get(complement) - 1);
        } else {
            numCount.set(num, (numCount.get(num) || 0) + 1);
        }
    }

    return operations;

// still fails going to try a hashmap
    // let operations = 0
    // let i = 0
    // let j = nums.length-1
    // while(i < j){
    //     if( nums[0] + nums[j] == k){
    //         nums.pop()
    //         nums.shift()
    //         operations++
    //         j = nums.length-1
    //     } else if(nums[i] + nums[j] != k){
    //         i++
    //     } else{
    //         nums.pop()
    //         nums.shift()
    //         operations++
    //     }
    // }
    // return operations

// passes some of test cases not all. what am i missing here?
    // let operations = 0
    // let i = 0
    // let j = nums.length-1
    // while (i < j){
    //         if(nums[i] + nums[j] != k){
    //           j--
    //           i++
    //         } else {
    //             operations++
    //             j--
    //             i++
    //         }
    //     }
    // return operations
};
// console.log(maxOperations([1,2,3,4], 5))

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value
//  and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);

    let maxSum = sum;

    nums.slice(k).forEach((num, index) => {
        sum = sum - nums[index] + num;
        maxSum = Math.max(maxSum, sum);
    });

    return maxSum / k;
};

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))

// Given a string s and an integer k, return the maximum number of vowel letters 
// in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

var maxVowels = function(s, k) {

// create a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
// Convert the input string to lowercase and create an array isVowel based on vowels Set.
    const isVowel = Array.from(s.toLowerCase(), char => vowels.has(char));

// Calculate the vowel count for the first window of size k using reduce.
    let initialVowelCount = isVowel.slice(0, k).reduce((count, isVowel) => count + isVowel, 0);
    let maxVowelCount = initialVowelCount;
    
// Iterate through the string starting from index k.
    for (let i = k; i < s.length; i++) {
// Update the vowel count based on the current character.
        initialVowelCount += isVowel[i] - isVowel[i - k];
// Update the maximum vowel count.
        maxVowelCount = Math.max(maxVowelCount, initialVowelCount);
    }

    return maxVowelCount;
    
};
// console.log(maxVowels("abcIIIdef", 3))

// Given a binary array nums and an integer k, 
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

var longestOnes = function(nums, k) {
    let zeroCount = 0;
    let maxLen = 0;
    let left = 0;

    nums.forEach((num, right) => {
        zeroCount += num === 0 ? 1 : 0;

        while (zeroCount > k) {
            zeroCount -= nums[left++] === 0 ? 1 : 0;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    });

    return maxLen;
};

// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array.
// Return 0 if there is no such subarray.

var longestSubarray = function(nums) {
    let maxLen = 0;
    let zeroCount = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // Increment zeroCount if the current number is 0, otherwise, add 0.
        zeroCount += nums[right] === 0 ? 1 : 0;

        // Slide the window by moving the left pointer when zeroCount exceeds 1.
      
        while (zeroCount > 1) {
            zeroCount -= nums[left++] === 0 ? 1 : 0;
        }

        // Update maxLen with the length of the current window.
        maxLen = Math.max(maxLen, right - left + 1);
    }

    // Return the maximum consecutive 1's length.
    return maxLen > 0 ? maxLen - 1 : 0; // Subtract 1 only if there are 1's in the array.
};

console.log(longestSubarray([1,1,0,1]))