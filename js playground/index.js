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

