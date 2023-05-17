import { NextResponse } from 'next/server';
 
export async function POST() {
  //const data="This is a test"
 
  return NextResponse.json({ message : "hello" });
}
