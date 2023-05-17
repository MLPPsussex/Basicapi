import { NextResponse } from 'next/server';
 
export async function GET() {
  const data="This is a test"
 
  return NextResponse.json({ data });
}
