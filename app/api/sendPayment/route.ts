// app/api/sendPayment/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { transactionNumber, total } = body;

  if (!transactionNumber || !total) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const message = `🧾 *New Payment Submitted*\n\n\n*Amount:* ${total}\n*Txn #:* \`${transactionNumber}\``;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await telegramRes.json();

    if (!data.ok) {
      return NextResponse.json({ error: data.description }, { status: 400 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Telegram error:", error);
    return NextResponse.json(
      { error: "Failed to send Telegram message" },
      { status: 500 }
    );
  }
}
