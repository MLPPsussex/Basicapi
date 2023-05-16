export default function handler(req, res) {
// var fs = require('fs');
 // const requestMethod = req.method;
  const body = req.body
//  switch (requestMethod) {
//   case 'POST':
  
  //const data = fs.readFileSync("mydata.txt")
  if(body=="JEREMY"){
      res.status(200).json({ message: `You are logged in ${body}` })
  }
  else{
   res.status(200).json({ message: 'fred' })
  }
   
//  default:
//      res.status(200).json({ message: 'not a Post'})
//  }
}
