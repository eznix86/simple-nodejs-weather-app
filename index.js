"use strict";
const request = require('request');
const argv = require("yargs").argv;
let apiKey = '62f4a1e15f9b36cc3789d01f79ad468e';
let city = argv.c || 'Port Louis';
let country = argv.p || 'mu';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;
request(url, function(err, response,body){
  if(err){
    console.log('error:', error);
  }else{
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
