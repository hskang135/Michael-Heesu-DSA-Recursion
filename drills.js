// #1
function countSheep(num) {
  if(num === 0) {
    console.log(`All sheep jumped over the fence`);
  }
  else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num - 1);
  }
};

//#2
function powerCalculator(base, exponent) {
  if(exponent <= 0) {
    return 'Exponent should be >= 0';
  }
  else if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, --exponent)
}

//#3
function reverseString(str) {
  if(str === '') {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

//#4
function trianglar(n) {
  if(n <= 0) return 'n must be > 0';
  if(n === 1) return 1;
  return n + trianglar(n-1);
}
//console.log(trianglar(7));
