const setDailyRhythm = (wakeUpTime, bedTime) => {
  setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    let realTime = `${hours}:${minutes}`;
    let checkTime = setAlarm(wakeUpTime, goodMorning),
    checkTimeEvening = setAlarm(bedTime, goodEvening);

    checkTime(realTime);
    checkTimeEvening(realTime);
    console.log(realTime);
    
  }, 1000);  
} 

const setAlarm = (time, callback) => {
  return function(realTime) {
    if (realTime == time) callback();
  }
}

const goodMorning = () => console.log('Доброе утро'),
      goodEvening = () => console.log('Добрый вечер');
        
setDailyRhythm('11:45', '18:12');