//1
const users = [
    { id: 1, name: "Олег", age: 25},
    { id: 2, name: "Мария", age: 30},
    { id: 3, name: "Иван", age: 20},
]
const sortByAge = users.filter(user => user.age > 20)
console.log(sortByAge)

//2
const products = [
    { id: 101, name: 'Телефон', price: 300 },
    { id: 102, name: 'Ноутбук', price: 900 },
    { id: 103, name: 'Часы', price: 150 }
]
const searchId = 102
const productName = products.find((product) => product.id === searchId)
if(productName) {
    console.log(productName)
}

//3
const tasks = [
    { id: 1, title: 'Сделать уборку', completed: true },
    { id: 2, title: 'Купить продукты', completed: false },
    { id: 3, title: 'Написать код', completed: true }
]
const readyTasks = tasks.filter((task) => task.completed)
console.log(readyTasks)

//4
const students = [
    { id: 1, name: 'Виктор', grade: 3 },
    { id: 2, name: 'Елена', grade: 5 },
    { id: 3, name: 'Анна', grade: 4 },
    { id: 4, name: 'Сергей', grade: 2 }
]
const highGrade = students.filter((student) => student.grade > 3)
console.log(highGrade.length)

//5
const orders = [
    { orderId: 1, customer: 'Александр', total: 250 },
    { orderId: 2, customer: 'Мария', total: 450 },
    { orderId: 3, customer: 'Иван', total: 150 },
    { orderId: 4, customer: 'София', total: 300 }
]
const expensiveOrders = orders.filter((order) => order.total > 200)
const strOrdesr = expensiveOrders.map((item) => `Покупатель: ${item.customer}, сумма: ${item.total}`)

// 6
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];
  
  const newBooks = books.map((book) => {
    return {
      name: book.title + book.author,
    };
  });
  console.log(newBooks);

  //7
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  
  const olderPeople = people.map((elem) => ({ ...elem, age: elem.age + 1 }));
  console.log(olderPeople);
  
  const other = people.map((person) => ({
    ...person,
    name: person.name + "new",
  }));
  console.log(other);
