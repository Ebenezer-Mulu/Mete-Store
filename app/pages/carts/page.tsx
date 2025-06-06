"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SharedCartPage() {
  const params = useSearchParams();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const dataParam = params.get("data");
    console.log("🚀 dataParam:", dataParam); // Step 1

    if (!dataParam) return;

    try {
      const decodedURIComponent = decodeURIComponent(dataParam);
      console.log("📨 decoded URI:", decodedURIComponent); // Step 2

      const decodedBase64 = atob(decodedURIComponent);
      console.log("🧩 decoded Base64:", decodedBase64); // Step 3

      const parsed = JSON.parse(decodedBase64);
      console.log("✅ parsed JSON:", parsed); // Step 4

      if (Array.isArray(parsed)) {
        setCart(parsed);
      } else {
        console.error("❌ parsed data is not an array:", parsed);
      }
    } catch (err) {
      console.error("🔥 Error decoding cart data:", err);
    }
  }, [params]);

  if (cart.length === 0) {
    return <div>No items to show. Check console logs above.</div>;
  }

  return (
    <div className="mt-20">
      {cart.map(item => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: {item.price} Birr</p>
        </div>
      ))}
    </div>
  );
}
