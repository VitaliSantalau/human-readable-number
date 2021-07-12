module.exports = function toReadable (number) {
  function getUnit(num) {
    const units = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
    };
    return units[num];
  }
  function getTens(num) {
    const tens = {
      1: "ten",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety",
    };
    return tens[num];
  }
  function getHundred(num) {
    return `${inner(num)} hundred`
  }

  function inner(num) {
    if(num < 20 && num !== 10 ) {
      return `${getUnit(num)}`;
    }
    if((20 <= num && num < 100) || num === 10) {
      const tens = Math.floor(num/10);
      return (num % 10 === 0) 
        ? `${getTens(tens)}` 
        : `${getTens(tens)} ${inner(num - tens*10)}`
    }
    if(100 <= num && num <= 1000 ) {
      const hundreds = Math.floor(num/100);
      return (num % 100 === 0)
        ? `${getHundred(hundreds)}`
        : `${getHundred(hundreds)} ${inner(num - hundreds*100)}`
    }
  }
  return inner(number);
}