import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const el ={
  startBtn: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutsValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  isActive: false,
  minDate: new Date(), // через цей атрибут неможливо вибрати невалідну дату
  onOpen(){
    el.startBtn.disabled = false;
  }
};
el.startBtn.disabled = true;
class Timer{
  constructor(){
    this.intervalId = null;
    this.isActive = false;
  }
  start() {
    if(this.isActive){
      return;
    }
    this.isActive = true;
    const futuredTime = calendar.selectedDates[0].getTime();
    this.intervalId = setInterval(() => {
      const nowTime = Date.now();
      const distance = futuredTime-nowTime;
      if(distance<1){
        console.log(this.intervalId);
        console.log(this)
        clearInterval(this.intervalId);
        return;
      };
      console.log(distance);
      console.log(this.intervalId);
      const timesObj = timeCalculator(distance);
      timeRenew(timesObj);
    }, 1000);
  }
  stop(){
    clearInterval(this.intervalId);
  }
}
const timer = new Timer();
function timeCalculator(time){
  days = addLeadingZero(Math.floor(time / (1000 * 60 * 60 * 24)));
  hours = addLeadingZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutes = addLeadingZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  seconds = addLeadingZero(Math.floor((time % (1000 * 60)) / 1000));
  return {days, hours, minutes, seconds};
};
function addLeadingZero(value){
  return String(value).padStart(2, '0');
};
const calendar = flatpickr("#datetime-picker", options);
el.startBtn.addEventListener('click', timer.start);
function timeRenew ({days,hours, minutes, seconds}){
  el.daysValue.textContent = days;
  el.hoursValue.textContent = hours;
  el.minutsValue.textContent = minutes;
  el.secondsValue.textContent = seconds;
};

