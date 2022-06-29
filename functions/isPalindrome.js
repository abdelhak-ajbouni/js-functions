const isPalindrome = (n) => {
  const str = n.toString()
  for (let i = 0; i < str.length; i++) {
    if (i !== (str.length / 2)) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false
      }
    }
  }
  return true
};

const response = isPalindrome(121)
console.log('isPalindrome response =========================', response)