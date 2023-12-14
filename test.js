function time(){
  let timeCorrect = document.getElementById('demo'); //after click the button it show the time;
  timeCorrect = new Date();
  timeCorrect.setDate(timeCorrect.getDate());
  const time = timeCorrect.toDateString();
  alert(time);
}

const daysOfWeek =  ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2 ,'0');

function clock(){
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
    const day = today.getDay();

    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('second').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = zeroPadding(ampm);
    $(daysOfWeek.at(day - 1))
      .classList.remove('active');
    $(daysOfWeek.at(day))
        .classList.add('active');
}
setInterval(clock,400)