const symbolToValue = {
  "M" : 1000,
  "CM": 900,
  "D" : 500,
  "CD": 400,
  "C" : 100,
  "XC": 90,
  "L" : 50,
  "XL": 40,
  "X" : 10,
  "IX": 9,
  "V" : 5,
  "IV": 4,
  "I" : 1,
}

// TODO: make sure the result is correct for all cases
const intToRoman = (num) => {
  let finalStr = "";
  for (s in symbolToValue){
      const v = symbolToValue[s];
      while (num >= v){
          num -= v;
          finalStr += s;
      }    
  }
  return finalStr;
};

const response = intToRoman(99)
console.log('intToRoman response =========================', response)