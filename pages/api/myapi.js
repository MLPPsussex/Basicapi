export default function handler(req, res) {
 // const requestMethod = req.method;
  const body = req.body
//  switch (requestMethod) {
//   case 'POST':
  if(body=="Jeremy"){
      res.status(200).json({ message: `You are logged in ${body}` })
  }
  else{
   res.status(200).json({ message: `You do not have access` })
  }
   
//  default:
//      res.status(200).json({ message: 'not a Post'})
//  }
}
