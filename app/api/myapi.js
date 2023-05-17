export default function handler(req, res) {
  var myfile = require('fs');
  var msg = myfile.readFileSync("mydata.txt")
  var l=msg.length
  if(req.body=="Me"){ res.status(200).json({ message: `Logged in` }) }
  else{ res.status(200).json({ message: `Error ${l}` })  }
   
}
