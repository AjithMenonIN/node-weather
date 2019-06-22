const request = require('request');
const readline = require('readline');
let apiKey = '8de2827ef42830e3b55e295689a56eab';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter City ', (city) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`




request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    temp  = parseInt((weather.main.temp - 32)*(5/9))
    let message = `It's ${temp} degrees in ${weather.name}!`;
    console.log(message);
  }
  rl.close();});
});
