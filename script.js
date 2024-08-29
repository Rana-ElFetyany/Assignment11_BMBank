const array = [
  8,
  "55",
  [
    2,
    "Heloo World",
    {
      a: 2,
      b: 5,
    },
    false,
  ],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "MOha", last: [2, false, undefined] },
  },
];

const [
  ,
  ,
  ,
  {
    arr: [, , , [, extractedNumber]],
    obj: { d: extractedString },
  },
] = array;

console.log(extractedNumber); 
console.log(extractedString); 

////////////////////////////////////////////////

const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

// function hasDuplicate(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//     //   if ((array[i] = []) || (array[j] = [])) {
//       if (Array.isArray(array[i]) || Array.isArray(array[j])) {
//         let arri = [...array[i]];
//         let arrj = [...array[j]];
//         if (arri[i] === arrj[j]) {
//           console.log("Duplicated");
//           // console.log(array[i]);
//           return true;
//         }
//       }

//       if (array[i] === array[j]) {
//         console.log("Duplicated");
//         // console.log(array[i]);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(hasDuplicate(array2));

function hasDuplicatesNestedLoops(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (compareElements(array[i], array[j])) {
        return true;
      }
    }
  }
  return false;
}

function compareElements(element1, element2) {
  if (typeof element1 !== typeof element2) {
    return false; 
  }

  if (typeof element1 === 'object' && element1 !== null && element2 !== null) {
    
    const keys1 = Object.keys(element1);
    const keys2 = Object.keys(element2);

    if (keys1.length !== keys2.length) {
      return false; 
    }

    for (const key of keys1) {
      if (!compareElements(element1[key], element2[key])) {
        return false;
      }
    }

    return true;
  }

  return element1 === element2; 
}

console.log(hasDuplicatesNestedLoops(array2)); 
