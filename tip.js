import { input, print } from './bitcamp/lib.js';

let dollars = input("how much was the meal? ");
let percent = input ("waht percent would you like to tip? ");
let tip = calculate_tip(dollars,percent)

function calculate_tip(dollars,percent,){
  return dollars * percent / 100;
}
console.log(tip)