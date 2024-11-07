// tasks
// --------
// 1.write a function to check whether input num is even or odd

function checkEvenOdd(num) {
  if (typeof num == "string") {
    return "enter numbers only";
  } else {
    if (num % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
console.log(checkEvenOdd(2)); //output==even
console.log(checkEvenOdd(3)); //output==odd
console.log(checkEvenOdd("hai")); //output==enter numbers only

// 2.write a function to check whether input string is palindrome or not
function checkPalindrome(name) {
  var str = "";
  for (i = name.length - 1; i >= 0; i--) {
    str += name[i];
  }
  if (str === name) {
    return "palindrome";
  } else {
    return "not a palindrome";
  }
}
console.log(checkPalindrome("madam")); //output== palindrome
console.log(checkPalindrome("sagar")); //output== not a palindrome

// 3.write a function to check largest num among three numbers.

function checkLargest(s, g, p) {
  if (s > g && s > p) {
    return `${s} is greater than ${g} and ${p}`;
  } else if (g > s && g > p) {
    return `${g} is greater than ${s} and ${p}`;
  } else if (p > s && p > g) {
    return `${p} is greater than ${s} and ${g}`;
  } else {
    return `all numbers are equal`;
  }
}
console.log(checkLargest(20, 200, 300)); //output==300 is greater than 20 and 200
