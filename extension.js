let question = input("waht is the extension of your syte ? ");
let extension = question.slice(question.lastIndexOf(".")).toLowerCase();

switch(extension){
  case ".gif":
  console.log("image/gif")
  break
  case ".jpg":
  console.log("image/jpg")
  break
  case ".jpeg":
  console.log("image/jpeg")
  break
  case ".png":
  console.log("image/png")
  break
  case ".pdf":
  console.log("image/pdf")
  break
  case ".txt":
  console.log("image/txt")
  break
  case ".zip":
  console.log("image/zip")
  break
  default:
  console.log('application/octet-stream')
};
