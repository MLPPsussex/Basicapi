import { kv } from "@vercel/kv";

export async function GET() {
  var num=await kv.incr('views')
  return NextResponse.json({ number: num});
}
