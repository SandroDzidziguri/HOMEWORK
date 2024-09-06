let text = input(" enter your text ");
for(let i of text){
  if("aeiou".includes(i.toLowerCase())){
    
      text=text.replace(i, "");
    }
  }

console.log(text);


