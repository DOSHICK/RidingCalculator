

// -- 

// вычисление общей суммы из массива чисел
let arraySum = (array) => {
  let accumulator = 0;
  array.forEach(num => {
    accumulator = accumulator + num;
  });
  return accumulator;
}

let travel = {
  price: 0.8,
  arr: [],
  ticket: 30.6,
  daysCount: [2, 4, 4, 2, 3]
};



// Date work

// спасибо https://habr.com/ru/post/177059/
Date.prototype.daysInMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
let daysInThisMonth = new Date().daysInMonth();

const currDate = new Date();

let dateInfo = {
  year: currDate.getFullYear(),
  month: currDate.getMonth(),
  day: currDate.getDay(),
  date: currDate.getDate(),
};

for (let index = 1; index <= daysInThisMonth; index++) {
  let workDate = new Date(`${dateInfo.year}-${dateInfo.month + 1}-${index}`);
  switch (workDate.getDay()) {
    case (0):
      if (travel.daysCount[6] != undefined) {
        travel.arr.push(travel.daysCount[6])
      }
      break;
    case (1):
      if (travel.daysCount[0] != undefined) {
        travel.arr.push(travel.daysCount[0])
      }
      break;
    case (2):
      if (travel.daysCount[1] != undefined) {
        travel.arr.push(travel.daysCount[1])
      }
      break;
    case (3):
      if (travel.daysCount[2] != undefined) {
        travel.arr.push(travel.daysCount[2])
      }
      break;
    case (4):
      if (travel.daysCount[3] != undefined) {
        travel.arr.push(travel.daysCount[3])
      }
      break;
    case (5):
      if (travel.daysCount[4] != undefined) {
        travel.arr.push(travel.daysCount[4])
      }
      break;
    case (6):
      if (travel.daysCount[5] != undefined) {
        travel.arr.push(travel.daysCount[5])
      }
      break;

    default:
      break;
  }
}


// console.log(arraySum(travel.arr) * 0.8)


//========= buttons && inputs

// inputs
const ticketPrice = document.getElementById('ticketPrice')
const arrayStart = document.getElementById('arrayStart')
const grandTicketPrice = document.getElementById('grandTicketPrice')


// outputs
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')

// btn
const countBtn = document.getElementById('count')

countBtn.onclick = () => {
  travel.price = ticketPrice.value
  travel.daysCount = arrayStart.value.split(',')
  travel.ticket = grandTicketPrice.value
  console.log(travel)

  text1.innerText = arraySum(travel.arr) * 0.8;
  text2.innerText = arraySum(travel.arr) * 0.8 - travel.ticket;
  text3.innerText = arraySum(travel.arr)
}

