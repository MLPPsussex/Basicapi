import { NextResponse } from 'next/server';
var fs = require('fs');
 
export async function GET() {
  //const data="This is a test"
 
   fs.writeFileSync("mydata.txt",
    "Movie ",
    { flag: "a+",}
                   );

 
  var msg = fs.readFileSync("mydata.txt")
  msg+="**"
 
  return NextResponse.json({ message : msg });
}
