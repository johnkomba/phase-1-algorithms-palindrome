function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here 
  FUNCTION isPalindrome(str)
    // Convert the string to lowercase and remove non-alphabetic characters
    str = CONVERT_TO_LOWERCASE(str)
    str = REMOVE_NON_ALPHABETIC_CHARACTERS(str)

    // Compare the reversed string with the original string
    IF str EQUALS REVERSE_STRING(str) THEN
        RETURN TRUE
    ELSE
        RETURN FALSE
    ENDIF
END FUNCTION

FUNCTION CONVERT_TO_LOWERCASE(str)
    // Convert all characters in the string to lowercase
    RETURN LOWERCASE(str)
END FUNCTION

FUNCTION REMOVE_NON_ALPHABETIC_CHARACTERS(str)
    // Remove any characters that are not alphabetic
    RETURN REPLACE_NON_ALPHABETIC_WITH_EMPTY_STRING(str)
END FUNCTION

FUNCTION REVERSE_STRING(str)
    // Reverse the characters in the string
    RETURN REVERSED(str)
END FUNCTION

FUNCTION REPLACE_NON_ALPHABETIC_WITH_EMPTY_STRING(str)
    // Use a regular expression to replace non-alphabetic characters with an empty string
    RETURN REGEX_REPLACE(str, '/[^a-z]/g', '')
END FUNCTION

*/

/*
  Add written explanation of your solution here

Certainly! Here's a written explanation of the isPalindrome function:

Function: isPalindrome

The isPalindrome function checks whether a given string is a palindrome. A palindrome is a word or phrase that reads the same backward as forward (e.g., "racecar" or "madam"). The function performs the following steps:

Input: Receives one argument, str, which is the string to be checked for palindromic properties.

String Preprocessing:

Convert the string to lowercase: This ensures that the function is case-insensitive.
Remove non-alphabetic characters: This step removes any characters that are not letters, ignoring spaces or special characters.
Comparison:

Compare the modified string with its reverse to determine if it's a palindrome.
Output:

If the modified string is the same when read backward, the function returns true, indicating that the input is a palindrome.
If not, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // Test Cases
console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("robot"));  // Output: false
console.log(isPalindrome("Able , was I saw eLba")); // Output: true
console.log(isPalindrome("hello"));  // Output: false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
