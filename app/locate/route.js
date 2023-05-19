import { kv } from "@vercel/kv";

export default async function GET() {
  var num=await kv.incr('views')
  return NextResponse.json({ number: num});
}
