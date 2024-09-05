const time = input('Whats the time?');

let [hours, minutes] = time.split(":");

function convert(number)
{   return Number(number);
 }
if(convert(hours) == 7 || convert(hours) == 8 && convert(minutes) < 1)
{   print("Breakfast") 
}else if(convert(hours) == 12 || convert(hours) == 13  && convert(minutes) < 1)
{   print("Lunch") 
}else if(convert(hours) == 18 || convert(hours) == 19 && convert(minutes) < 1)
{   print("Dinner") }
  
