import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputFild = document.querySelector("#datetime-picker");
const btn = document.querySelector("[data-start]");
const day = document.querySelector("[data-days]")
const hour = document.querySelector("[data-hours]")
const minute = document.querySelector("[data-minutes]")
const sec = document.querySelector("[data-seconds]")
btn.setAttribute("disabled", "")


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(Date.now() > selectedDates[0].getTime()) 
      {return iziToast.warning({
        message: 'Please choose a date in the future', position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false
    }),
    btn.setAttribute("disabled", "")
    }else{
     btn.removeAttribute("disabled")
    }
    },
  };

  let intervalNumb;
  let begin = false

  const calendar = flatpickr(inputFild, options);
  btn.addEventListener("click", startTime);


function startTime(){
  inputFild.setAttribute("disabled", "")
  btn.setAttribute("disabled", "")
  if(begin)return
  begin = true
  let userSelectedDate = calendar.selectedDates[0]
  console.log(userSelectedDate)
  intervalNumb = setInterval(() =>
  {const diff = userSelectedDate - Date.now();
    if (diff < 1000) stopTimer();
    updateTimer(convertMs(diff))
}, 1000)}

function stopTimer(){
  clearInterval(intervalNumb)
}

function addZero(num) {
    return num.toString().padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  day.innerHTML = addZero(days);
  hour.innerHTML = addZero(hours);
  minute.innerHTML = addZero(minutes);
  sec.innerHTML = addZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}