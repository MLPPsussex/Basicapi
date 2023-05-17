export default function handler(req, res) {
 var fs = require('fs');
 // const requestMethod = req.method;
  const body = req.body
//  switch (requestMethod) {
//   case 'POST':
  
  var data1 = fs.readFileSync("mydata.txt")
  data1=data1.slice(0,1)+"x12x"
  if(body=="JEREMY"){
      res.status(200).json({ message: `You are logged in ${body}` })
  }
  else{
   res.status(200).json({ message: `1 ${data1}` })
  }
   
}
