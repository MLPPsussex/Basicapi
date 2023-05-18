import { NextResponse } from 'next/server';
var fs = require('fs');
 
export async function GET() {
  var msg = ""
  msg=fs.readFileSync("mydata.txt")
  msg+="**"
 
  return NextResponse.json({ message: msg , color: 'blue'});
}
