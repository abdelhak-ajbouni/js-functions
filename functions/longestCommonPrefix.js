var longestCommonPrefix = function(strs) {
  for(let i = strs[0].length; i > 0; i--) {
  const cm = strs[0].substring(0, i)
  let isCommon = true
      for(let j = 1; j < strs.length; j++) {
          if (!strs[j].includes(cm)) {
            isCommon = false
          }
      }
  if (isCommon) return cm 
  }
  return ""
};

const strs = ["flower","flow","flight"]
const response = longestCommonPrefix(strs)

console.log('longestCommonPrefix response =========================', response)