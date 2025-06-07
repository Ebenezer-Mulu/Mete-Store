import CartClient from "app/components/cartClient";


export const dynamic = "force-dynamic"; 

export default function CartPage() {
  return (
    <main>
      <h1>Your Shared Cart</h1>
      <CartClient />
    </main>
  );
}
