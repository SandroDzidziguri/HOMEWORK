function convert(emoji){
    return emoji.replaceAll(":)", " 🙂").replaceAll(":(", " 🙁"  )
  }
  const text = input("how do you feel? ");
  console.log(convert(text));