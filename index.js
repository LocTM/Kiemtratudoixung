let word1 = "level";
let word2 = "hello";
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if (s.length <= 1) {
        return true;
    }
    if (s[0] === s[s.length - 1]) {
        return isPalindrome(s.slice(1, s.length - 1));
    } else {
        return false;
    }
}
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));