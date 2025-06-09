// app/api/share-cart/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { cartDetails } = await req.json();

  const cartData = encodeURIComponent(btoa(JSON.stringify(cartDetails)));
  const sharedCartUrl = `https://mete-store.vercel.app/carts?data=${cartData}`;

  const formData = new URLSearchParams();
  formData.append("chat_id", process.env.TELEGRAM_ID!);
  formData.append("text", `🛒 View shared cart: ${sharedCartUrl}`);

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: result.description }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
