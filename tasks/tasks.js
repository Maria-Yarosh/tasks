const func = (arr) => {
    let longestWord = ''
    for(let i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i]
        }
    }
    return longestWord
}
function long(arr) {
    const newArr = arr.map((item) => {
      return item.length;
    });
    const maxLength = newArr.sort((a, b) => b - a)[0];
    const maxWordLength = arr.find((item) => item.length === maxLength);
    return maxWordLength;
  }
  
  const array = ["jjj", "kkkkkkkkk", "jjj", "isjsjs"];
  console.log(long(array));

//2
const sortArray = (arr) => {
    return [...arr].sort((a, b) => a - b)
}

//3
const obj = {
    a: 1,
    b: 3,
    c: 'h'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));

const sumFunc = (object) => {
  const arrayValues = Object.values(object);
  let sum = 0;
  for (let i = 0; i < arrayValues.length; i++) {
    if (typeof arrayValues[i] === "number") {
      sum += arrayValues[i];
    }
  }
  return sum;
};
console.log(sumFunc(obj));

//4
const checkEmptyObj = (obj) => {
    //if (Object.keys(obj).length === 0) {
    //  return true
    //}
    // return false
    return Object.keys(obj).length === 0;
  };
  console.log(checkEmptyObj({}))

  //5
  const change = (obj) => {
    const obj2 = {};
    const arrKeys = Object.keys(obj);
    for (let i = 0; i < arrKeys.length; i++) {
      obj2[obj[arrKeys[i]]] = arrKeys[i]
    }
    return obj2;
  };
  console.log(change(obj));

  //6
  const data = [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" },
    { category: "vegetable", name: "pepper" },
  ];
  
  console.log(groupBy(data, "category"));
  // {
  //   fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }],
  //   vegetable: [{ category: "vegetable", name: "carrot" }, { category: "vegetable", name: "pepper" }]
  // }
  
  function groupBy(array, key) {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
      const groupKey = array[i][key];
      if (!obj[groupKey]) {
        obj[groupKey] = [];
      }
      obj[groupKey].push(array[i]);
    }
    return obj;
  }
  
  //7
  const input = [
    { apples: 5, oranges: 10 },
    { apples: 15, bananas: 5 },
    { oranges: 5, bananas: 15 },
  ];
  
  console.log(mergeObjects(input));
  // { apples: 20, oranges: 15, bananas: 20 }
  
  function mergeObjects(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      const keys = Object.keys(arr[i]);
      for (let j = 0; j < keys.length; j++) {
        if (!obj[keys[j]]) {
          obj[keys[j]] = 0;
        }
        obj[keys[j]] += arr[i][keys[j]]
      }
    }
    return obj;
  }

  //8
  const object = { a: 10, b: 20, c: 10, d: 30 };
console.log(filterObject(object, 10)); // { a: 10, c: 10 }

function filterObject(obj, value) {
    const newObj = {}
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] === value) {
            newObj[keys[i]] = obj[keys[i]]
        }
    }
    return newObj
}