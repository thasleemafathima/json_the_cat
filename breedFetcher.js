
const request = require('request');
const fs = require('fs');
const a = process.argv.slice(2);
let url1 = "https://api.thecatapi.com/v1/breeds/search?q=";
let breed = a
let finalurl = url1+breed;
let data;

request (finalurl, (error, response, body) => {
  if(error){
    console.log("error on loading the page")
    return 
  }
  data = JSON.parse(body);
  if(data == ""){
    console.log("could not find the breed");
    return;
  }
  
console.log(data[0].description);
});

