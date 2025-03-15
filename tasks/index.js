// 1
function factorial (n) {
    let result = 1
    while (n) {
        result *= n--
    }
    return result
}

//2
function res (n) {
    let start = 1
    while (start <= n) {
    //console.log(start)
    start++
      if (start % 3 == 0 && start % 5 == 0) {
        console.log('FizzBuzz')
      } else if (start % 5 == 0) {
        console.log('Buzz')
      } else if (start % 3 == 0) {
        console.log('Fizz')
      } else {
      console.log(start)
      }
    } 
  }

  //3
function calc() {
  let numFirst = +prompt('Введите число')
  let numSecond = +prompt('Введите следующее число')
  let operator = prompt('Введите действие + - / *')
  let result
    switch (operator) {
      case '+':
        result = numFirst + numSecond
        break
      case '-':
        result = numFirst - numSecond
        break
      case '/':
        result = numFirst / numSecond
        break
      case '*':
        result = numFirst * numSecond
        break
      default:
        alert('Неизвестное действие')
    }
    return alert(result)
  }
  //calc()

//4
const multipli = function (n) {
    for ( let i = 1; i < 11; i++) {
      console.log(n * i)
    }
  }
  
  //multipli(3)

//5
const getSum = function () {
    let sum = 0
    for ( let i = 1; i < 101; i++ ) {
      sum += i
      if (i % 5 == 0) {
        sum += i
      }
    }
    console.log(sum)
  }
  //getSum()

//6
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  //console.log(getRandomNum(1, 10))
  let randomNum = getRandomNum(1, 10)

  function game () {
    console.log(randomNum)
    while (true) {
     let userNum = prompt('Угадайте число от 1 до 10')
      if (userNum === null) {
        alert('выход')
        break
      } 
      if (+userNum > randomNum) {
        alert('вы ввели больше')
      } else if (+userNum < randomNum) {
        alert('меньше')
      } else {
        alert("угадали")
      }
    }
  }

  function game (userNum) {   
    let randomNum = getRandomNum(1, 10)
    console.log(randomNum)
    if (userNum !== randomNum) {
      console.log('не угадали')
    } else {
      console.log("угадали")
    }
  }
//game(7)
//game(7)
//game(7)
//game(7)

//7
let drink = prompt('Выберете напиток: water, juice, cola, coffee')

switch (drink) {
  case 'water':
    console.log('самая популярная жидкость') //alert
    break
  case 'juice':
    console.log('из натуральных фруктов')
    break
  case 'cola':
    console.log('был создан как лекарство от любых нервных расстройств')
    break
  case 'coffee':
    console.log('отлично бодрит')
    break
  default:
    console.log('других напитков нет')
}

//8
let transport = prompt('Введите тип транспорта: bus, tram, metro')
switch (transport) {
  case 'bus':
    console.log(75) //alert
    break
  case 'tram':
    console.log(65)
    break
  case 'metro':
    console.log(81)
    break
  default:
    console.log('не выбрали, введите из предложенных')
}

//9
let sum = 0
for (i = 0; i < 51; i++) {
  if(i % 2 === 0) {
    sum += i
  }
}
console.log(sum)

//10
const arr = [3, 5, 6, 1, 7, 9, 2, 4]

function bubbleSort(array) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let elem = array[i]
        array[i] = array[i + 1]
        array[i + 1] = elem
      }
    }
  }
  return array
}
console.log(bubbleSort(arr));

for (let j = arr.length - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
    if (arr[i] > arr[i + 1]) {
      let elem = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = elem
    }
  }
}
console.log(arr)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  
}
 //11
const convertTemperature = (temp, measure) => {
  let convert;
  switch (measure) {
    case "C":
      convert = (temp * 9) / 5 + 32;
      break;

    case "F":
      convert = ((temp - 32) * 5) / 9;
      break

    default:
      return console.log("вы ввели не C или F");
      break;
  }
  return console.log(convert);
};

convertTemperature(25, "C") //77;
convertTemperature(77, "F") //25
