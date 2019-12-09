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

//#5
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

//#6
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
//console.log(fibonacci(9));

//#7
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
//console.log(factorial(3));

//#8
function mazeSolver(maze, y = 0, x = 0) {
  if (maze[y][x] === 'e') return true; //found the exit
  if (maze[y][x] !== ' ') return false; //blocked or already visited
  let sizeY = maze.length;
  let sizeX = maze[0].length;
  let newMaze = maze.map(arr => [...arr]); //deep copy
  newMaze[y][x] = '*';
  if (x + 1 < sizeX) {
    //can we go right?
    let right = mazeSolver(newMaze, y, x + 1);
    if (right) {
      if (typeof right === 'boolean') return 'R';
      return 'R' + right;
    }
  }
  if (y + 1 < sizeY) {
    //can we go down?
    let down = mazeSolver(newMaze, y + 1, x);
    if (down) {
      if (typeof down === 'boolean') return 'D';
      return 'D' + down;
    }
  }
  if (x > 0) {
    //can we go left?
    let left = mazeSolver(newMaze, y, x - 1);
    if (left) {
      if (typeof left === 'boolean') return 'L';
      return 'L' + left;
    }
  }
  if (y > 0) {
    //can we go up?
    let up = mazeSolver(newMaze, y - 1, x);
    if (up) {
      if (typeof up === 'boolean') return 'U';
      return 'U' + up;
    }
  }
  return false;
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
// console.log(`path to the exit in small maze: ${mazeSolver(mySmallMaze)}`);
// console.log(`path to the exit in large mage: ${mazeSolver(maze)}`);

/*
maze solver: maze, x, y (0,0 top left corner, increasing down/right)
take maze and location
copy maze but change location to * to mark as blocked (since already visited) 
(maybe some other character to mark as already visited? don't think it's necessary)
try:
can I go up?  maze solver (new maze, x, y - 1), if that works, return U + string from maze solver
if can't go up or maze solver returns false, try right
can I go right? maze solver (new maze, x + 1, y), if that works,
return R + string from maze solver
etc (try down, left)
if nothing works return false

for maze solver all...return array of possibilities?  
*/

//#9
function mazeSolverAll(maze, y = 0, x = 0) {
  if (maze[y][x] === 'e') return ['']; //found the exit
  if (maze[y][x] !== ' ') return [false]; //blocked or already visited
  let sizeY = maze.length;
  let sizeX = maze[0].length;
  let newMaze = maze.map(arr => [...arr]); //deep copy
  newMaze[y][x] = '*';
  let results = [];

  if (x + 1 < sizeX) {
    //can we go right?
    let right = mazeSolverAll(newMaze, y, x + 1);
    right = right.filter(x => x !== false);
    if (right.length > 0) {
      let rightPaths = right.map(path => 'R' + path);
      results = [...results, ...rightPaths];
    }
  }
  if (y + 1 < sizeY) {
    //can we go down?
    let down = mazeSolverAll(newMaze, y + 1, x);
    down = down.filter(x => x !== false);
    if (down.length > 0) {
      let downPaths = down.map(path => 'D' + path);
      results = [...results, ...downPaths];
    }
  }
  if (x > 0) {
    //can we go left?
    let left = mazeSolverAll(newMaze, y, x - 1);
    left = left.filter(x => x !== false);
    if (left.length > 0) {
      let leftPaths = left.map(path => 'L' + path);
      results = [...results, ...leftPaths];
    }
  }
  if (y > 0) {
    //can we go up?
    let up = mazeSolverAll(newMaze, y - 1, x);
    up = up.filter(x => x !== false);
    if (up.length > 0) {
      let upPaths = up.map(path => 'U' + path);
      results = [...results, ...upPaths];
    }
  }
  if (results.length === 0) results = [false];
  return results;
}
// let mazePaths = mazeSolverAll(maze);
// mazePaths.map(path => console.log(`Path to the exit: ${path}`));

//#10
function anagram(str) {
  if (str.length < 1) return [];
  if (str.length === 1) return [str[0]];

  let anagrams = [];
  for (let i = 0; i < str.length; i++) {
    let rest = [...str];
    let character = rest[i];
    rest.splice(i, 1);

    let foo = anagram(rest);
    for (let index in foo) {
      anagrams.push(character + foo[index]);
    }
  }
  return anagrams;
}
//console.log(anagram('plate'));

//#11
let orgChartObj = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: { Steve: {}, Kyle: {}, Andra: {} },
      Zhao: { Richie: {}, Sofia: {}, Jen: {} }
    },
    Schrage: {
      VanDyck: { Sabrina: {}, Michelle: {}, Josh: {} },
      Swain: { Blanch: {}, Tom: {}, Joe: {} }
    },
    Sandberg: {
      Goler: { Eddie: {}, Julie: {}, Annie: {} },
      Hernandez: { Rowi: {}, Inga: {}, Morgan: {} },
      Moissinac: { Amy: {}, Chuck: {}, Vinni: {} },
      Kelley: { Eric: {}, Ana: {}, Wes: {} }
    }
  }
};

/*
  for each key in object, print the key and call again
*/

function printOrgChart(org, depth = 0) {
  const spacer = ' '.repeat(depth * 4);

  const keys = Object.keys(org);
  keys.forEach(key => {
    console.log(spacer + key);
    printOrgChart(org[key], depth + 1);
  });
}

//#12
function binaryRep(num) {
  if (num <= 0) return '';

  let binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;
}

// binaryRep(3)
//   binaryRep(1) + 1   1 + 1 = 11
//     binaryRep() + 1   '' + 1 = 1
