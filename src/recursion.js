/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array[array.length - 1] + sum(array.slice(0, array.length - 1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  if (Array.isArray(array)) {
    if (array.length === 0) {
      return 0;
    }

    if (array.length === 1) {
      return parseInt(arraySum(array[0]));
    }

    return arraySum(array[array.length - 1]) + arraySum(array.slice(0, array.length - 1));
  }
  else {
  return parseInt(array);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) {
    n *= -1;
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0 ) {
    return n;
  } else if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  } else {
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var arr = [];
  if (x === y || x === y - 1 || x === y + 1) {
    return arr;
  } else if (x > y) {
    arr.push(x - 1);
    return arr.concat(range(x - 1, y));
  } else {
    arr.push(x + 1);
    return arr.concat(range(x + 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return Number.parseFloat(((1 / base) * exponent(base, exp + 1)).toPrecision(5));
  } else if (exp > 0 && isEven(exp)) {
    return exponent(base, exp / 2) ** 2;
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (!Number.isInteger(n) || n === 0) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var str = '';
  if (string.length === 1) {
    return string;
  } else {
    str += string[string.length - 1];
    return str + reverse(string.slice(0, string.length - 1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // palindromes have to have the same letters front and back
  // two types of palindromes: even and odd lengthed
  // even:  'elle'
  // odd: 'eve'
  if (string.length === 1) {
    return true;
  } else if (string.length === 2) {
    if (string[0].toLowerCase() === string[1].toLowerCase()) {
      return true;
    } else {
      return false;
    }
  } else {
    if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
      return palindrome(string.slice(1, length - 1));
    } else {
      return false;
    }
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var xIsNeg, yIsNeg;
  if (y === 0) {
    return NaN;
  } else if (x === y) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else if (x === -1) {
    return -1;
  }

  if ( x < 0 ) {
    x = x - x - x;
    xIsNeg = true;
  }

  if (y < 0) {
    y = y - y - y;
    yIsNeg = true;
  }

  if (xIsNeg || yIsNeg) {
    if (x < y) {
      x = x - x - x;
      return x;
    } else {
      var negArg = (x - y) - (x - y) - (x - y);
      return modulo(negArg, y);
    }
  } else {
    if (x < y) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var xIsNeg, yIsNeg;

  if (x === 0 || y === 0) {
    return 0;
  }

  if (x < 0) {
    x = x - x - x;
    xIsNeg = true;
  }

  if (y < 0) {
    y = y - y - y;
    yIsNeg = true;
  }

  if ((xIsNeg && yIsNeg) || !xIsNeg && !yIsNeg) {
    if (x <= 1) {
      return y;
    } else {
      return y + multiply(x - 1, y);
    }
  } else if (xIsNeg) {
    if (x <= 1) {
      return y - y - y;
    } else {
      var negArg = (x - 1) - (x - 1) - (x - 1);
      return (y - y - y) + multiply(negArg, y);
    }
  } else if (yIsNeg) {
    if (x <= 1) {
      return y - y - y;
    } else {
      var negArg = y - y - y;
      return negArg + multiply(x - 1, negArg);
    }
  }


};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var xIsNeg, yIsNeg;

  if (x < 0) {
    x = x - x - x;
    xIsNeg = true;
  }

  if (y < 0) {
    y = y - y - y;
    yIsNeg = true;
  }

  if (y > x) {
    return 0;
  } else if (x >= 0 && x < y) {
    return 0;
  } else if (y === 0) {
    return NaN;
  } else {
    if ((xIsNeg && yIsNeg) || (!xIsNeg && !yIsNeg)) {
      return 1 + divide(x - y, y);
    } else if (xIsNeg) {
      return -1 + divide(((x - y) - (x - y) - (x - y)), y);
    } else if (yIsNeg) {
      return -1 + divide(x - y, y - y - y);
    }

  }


};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }

  if (x < 0 || y < 0) {
    return null;
  }

  var remainder = modulo(x, y);
  return gcd(y, remainder);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if  ((str1.length === 1 && str2.length === 1) && str1[0] === str2[0]) {
    return true;
  }

  if (str1[0] !== str2[0]) {
    return false;
  } else {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var arr = [];
  if (str.length === 0) {
    return arr;
  } else if (str.length === 1) {
    arr.push(str[0]);
    return arr;
  } else {
    arr.push(str[0]);
    return arr.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var arr = [];
  if (array.length === 1) {
    arr.push(array[0]);
    return arr;
  } else {
    arr.push(array[array.length - 1]);
    array.pop();
    return arr.concat(reverseArr(array));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var arr = [];

  if (length === 0) {
    return [];
  }
  arr.push(value);
  return arr.concat(buildList(value, length - 1));

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var arr = [];

  if (n === 1) {
    return ['1'];
  } else {
    if (modulo(n, 3) === 0 && modulo(n, 5) === 0) {
      arr.push('FizzBuzz');
      return fizzBuzz(n - 1).concat(arr);
    } else if (modulo(n, 3) === 0) {
      arr.push('Fizz');
      return fizzBuzz(n - 1).concat(arr);
    } else if (modulo(n, 5) === 0) {
      arr.push('Buzz');
      return fizzBuzz(n - 1).concat(arr);
    } else {
      arr.push(n.toString());
      return fizzBuzz(n - 1).concat(arr);
    }
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var counter = 0;

  if (array.length === 1) {
    if (array[0] === value) {
      return 1;
    } else {
      return 0;
    }
  }

  if (array[array.length - 1] === value) {
    counter++;
    array.pop();
    return counter + countOccurrence(array, value);
  } else {
    array.pop();
    return counter + countOccurrence(array, value);
  }

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arr = [];
  if (array.length === 1) {
    arr.push(callback(array[0]));
    return arr;
  }

  arr.push(callback(array[array.length - 1]));
  return rMap(array.slice(0, array.length - 1), callback).concat(arr);
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var counter = 0;

  if (typeof obj !== 'object') {
    return 0;
  }
  for (var loopKey in obj) {
    if (loopKey === key) {
      counter++;
    }

    counter = counter + countKeysInObj(obj[loopKey], key);
  }
  return counter;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var counter = 0;

  if (typeof obj !== 'object') {
    return 0;
  }

  for (var key in obj) {
    if (obj[key] === value) {
      counter++;
    } else {
      counter += countValuesInObj(obj[key], value);
    }
  }

  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  if (typeof obj !== 'object') {
    return;
  }

  for (var key in obj) {
    if (key === oldKey) {
      replaceKeysInObj(obj[key], oldKey, newKey);
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    } else {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var arr = [];

  if (n <= 0) {
    return null;
  } else if (n === 1) {
    arr.push(0);
    arr.push(1);
    return arr;
  } else if (n === 2) {
    arr.push(0);
    arr.push(1);
    arr.push(1);
    return arr;
  } else {
    var twoBack = fibonacci(n - 2);
    var oneBack = fibonacci(n - 1);
    var nVal = twoBack[twoBack.length - 1] + oneBack[oneBack.length - 1];
    arr.push(nVal);
    return fibonacci(n - 1).concat(arr)
  }

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return nthFibo(n - 2) + nthFibo(n - 1);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var arr = [];

  if (array.length === 1) {
    arr.push(array[0].toUpperCase());
    return arr;
  } else {
    arr.push(array[0].toUpperCase());
    array.shift();
    return arr.concat(capitalizeWords(array));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var arr = [];

  if (array.length === 1) {
    var word = array[0].split('')
    word[0] = word[0].toUpperCase();
    word = word.join('');
    arr.push(word);
    return arr;
  } else {
    var word = array[0].split('')
    word[0] = word[0].toUpperCase();
    word = word.join('');
    arr.push(word);
    array.shift();
    return arr.concat(capitalizeFirst(array));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return 0;
  }

  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) { sum += obj[key];
    } else {
      sum += nestedEvenSum(obj[key]);
    }

  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var arr = [];

  if (Array.isArray(array)) {
    if (array.length === 0) {
      return arr;
    } else if (array.length === 1) {
      return flatten(array[0]);
    } else {
      var current = flatten(array[0]);
      array.shift();
      return current.concat(flatten(array));
    }
  } else {
    arr.push(array);
    return arr;
  }
}

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }

  if (str.length === 1) {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
      return obj;
    } else {
      obj[str[0]]++;
      return obj;
    }
  } else {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
      return letterTally(str.slice(1, str.length), obj);
    } else {
      obj[str[0]]++;
      return letterTally(str.slice(1, str.length), obj);
    }
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var newList = [];
  if (list.length === 0) {
    return newList;
  }

  if (list.length === 1) {
    return list;
  }

  if (list[0] !== list[1]) {
    newList.push(list[0]);
    return newList.concat(compress(list.slice(1)));
  } else {
    return newList.concat(compress(list.slice(1)));
  }

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
