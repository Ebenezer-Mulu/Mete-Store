import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cartDetails } = await req.json();

    if (!cartDetails || !Array.isArray(cartDetails)) {
      return NextResponse.json(
        { error: "Invalid cart details" },
        { status: 400 }
      );
    }

    const cartData = encodeURIComponent(btoa(JSON.stringify(cartDetails)));
    const sharedCartUrl = `https://mete-store.vercel.app/carts?data=${cartData}`;

    // Send to Telegram
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          chat_id: process.env.TELEGRAM_ID!,
          text: `🛒 View shared cart: ${sharedCartUrl}`,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      return NextResponse.json(
        { error: telegramData.description },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, link: sharedCartUrl });
  } catch (error) {
    console.error("Error in /api/share-cart:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
