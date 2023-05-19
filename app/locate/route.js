import { kv } from "@vercel/kv";

export default async function loc() {
  await kv.incr('views')
}
