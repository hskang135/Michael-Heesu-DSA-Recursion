// #1
function countSheep(num) {
  if (num === 0) {
    console.log(`All sheep jumped over the fence`);
  } else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num - 1);
  }
}

//#2
function powerCalculator(base, exponent) {
  if (exponent <= 0) {
    return 'Exponent should be >= 0';
  } else if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, --exponent);
}

//#3
function reverseString(str) {
  if (str === '') {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

//#4
function trianglar(n) {
  if (n <= 0) return 'n must be > 0';
  if (n === 1) return 1;
  return n + trianglar(n - 1);
}
//console.log(trianglar(7));

function split(str, sep) {
  let index = str.indexOf(sep);
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), ...split(str.slice(index + 1), sep)];
  // const beforeSeparator = str.slice(0, index);
  // const afterSeparator = str.slice(index + 1); //+1 to exclude the separator
  // return [beforeSeparator, ...split(afterSeparator, sep)];
}

//'02/20/2020' => ['02', ...split('20/2020')]
//'20/2020' => ['20', ...split('2020')]
// '2020' => ['2020']
//['20', ...['2020']] = ['20', '2020']
//['02', ... ['20', '2020']] = ['02', '20', '2020']

console.log(split('02/20/2020', '/'));
