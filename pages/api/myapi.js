export default function handler(req, res) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case 'POST':
      res.status(200).json({ message: `You submitted: ${body}` })
  default:
      res.status(200).json({ message: 'not a Post'})
  }
}
