"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CartClient() {
  const params = useSearchParams();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const dataParam = params.get("data");
    if (!dataParam) return;

    try {
      const decodedURIComponent = decodeURIComponent(dataParam);
      const decodedBase64 = atob(decodedURIComponent);
      const parsed = JSON.parse(decodedBase64);
      if (Array.isArray(parsed)) {
        setCart(parsed);
      }
    } catch (err) {
      console.error("Error decoding cart data:", err);
    }
  }, [params]);

  if (cart.length === 0) {
    return <div>No items to show. Check console logs above.</div>;
  }

  return (
    <div className="mt-20">
      {cart.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: {item.price} Birr</p>
        </div>
      ))}
    </div>
  );
}
