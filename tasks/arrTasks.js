//1
const arr1 = [1, 4, 7, 8, 3, 10];

function getSumEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (elem % 2 === 0) {
      sum += elem;
    }
  }
  console.log(sum);
}
getSumEven(arr1);

const sumArr1 = arr1.reduce((sum, elem) => {
    return sum + elem
}, 0)
console.log(sumArr1)

let sum1 = 0
arr1.forEach((num) => {
    sum1 += num
})
console.log(sum1)

//2
const arr2 = [1, 2, 3, 4, 5]
console.log(arr2.reverse())
const arr21 = [];

for (let i = arr2.length - 1; i >= 0; i--) {
  arr21.push(arr2[i])
}

//3
const arr3 = [7, 3, 15, 2, 9]
const getMinMax = (array) => {
    let max = Math.max(...array)
    let min = Math.min(...array)
    console.log(`максимальное значние - ${max}, минимальное - ${min}`)
}
getMinMax(arr3)

//4
const arr4 = [1, 2, 3, 2, 4, 1, 5]
const obj = {}
for (let i = 0; i < arr4.length; i++) {
    obj[arr4[i]] = (obj[arr4[i]] || 0) + 1;
  }
  console.log(obj);

//5
const arr5 = [1, 2, 3]
const arr51 = [4, 5, 6]

const arr512 = [...arr5, ...arr51]
const arr5123 = arr5.concat(arr51)

//6
const arr6 = [1, 2, 2, 3, 4, 4, 5]
const uniqueArr6 = [...new Set(arr6)]

function unique(array) {
    return Array.from(new Set(array))
}
console.log(uniqueArr6)
console.log(unique(arr6))

//7
const arr7 = [2, 4, 6, 8, 10]

function getMean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        sum += element
    }
    return sum / arr.length
}
console.log(getMean(arr7))

const getMeanReducer = arr7.reduce((sum, item) => {
    sum += item
    return sum
}, 0) / arr7.length
console.log(getMeanReducer)

//8
const arr8 = [1, 3, 5, 7, 9]

const findFive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            console.log('число 5 найдено')
        }
        console.log('число 5 не найдено')
    }
}
findFive(arr8)

//9
const arr9 = [1, 2, 3, 4]
const newArr9 = []

for (let i = 0; i < arr9.length; i++) {
    newArr9.push(arr9[i] * 2)
}
console.log(newArr9)

const arrMap = arr9.map((item) => item * 2)
console.log(arrMap)

//10
const arr10 = [1, 2, 3]
const arr101 = [4, 5, 6]

let sumArr = arr10.map((item, index) => item + arr101[index])
console.log(sumArr)


let sumArr1 = []
for (let i = 0; i < arr10.length; i++) {
    sumArr1[i] = arr10[i] + arr101[i]
}
console.log(sumArr1)