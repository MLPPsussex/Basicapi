import { NextResponse } from 'next/server';
var fs = require('fs');
 
export async function POST() {
  //const data="This is a test"
 
  var msg = fs.readFileSync("mydata.txt")
  msg+="**"
 
  return NextResponse.json({ message : msg });
}
