const monthEvent = document.querySelector('.date h1');
const stringOfDate = document.querySelector('.date p');
const newDate = new Date();
const daysEvent = document.querySelector('.days');
const currentMonthIndx = newDate.getMonth();
const lastDay = new Date(newDate.getFullYear(), currentMonthIndx + 1, 0).getDate();
//+6 coz.. my system start from sun and this calender strt from mon
const firstDay = new Date(newDate.getFullYear(), currentMonthIndx, 1).getDay() + 6;

const currentDayindx = newDate.getDate();

// console.log(firstDay);
// console.log(currentMonthIndx);
const months = [
    "January", "Febuary", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December",
]
monthEvent.innerText = months[currentMonthIndx];
stringOfDate.innerText = newDate.toDateString();
var days = "";
let j = firstDay;
while (j > 0) {
    days += `<div class="empty"></div>`;
    j -= 1;
}

let i = 1;
while (i <= lastDay) {
    if (i == currentDayindx) {
        days += `<div class="today">${i}</div> `;
    }
    else
        days += `<div>${i} </div>`;
    i += 1;

}

daysEvent.innerHTML = days;



