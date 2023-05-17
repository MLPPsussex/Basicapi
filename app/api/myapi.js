var fs = require('fs');
export default function handler(req, res) {
  var msg = fs.readFileSync("mydata.txt")
  if(req.body=="Me"){ res.status(200).json({ message: `Logged in` }) }
  else{ res.status(200).json({ message: `Error ${msg}` })  } 
}
