import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export default async function GET() {
  var num=await kv.incr('views')
  num+="++"
  return NextResponse.json({ nmber: num});
}
