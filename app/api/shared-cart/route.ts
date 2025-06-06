import prisma from "app/lib/prisma";


export async function POST(request: Request) {
  try {
    const cartItems = await request.json(); // expecting array of items with id & quantity

    if (!Array.isArray(cartItems)) {
      return new Response('Invalid data', { status: 400 });
    }

    // Convert all ids to numbers if necessary
    const ids = cartItems.map((item) => Number(item.id));

    // Fetch products from DB with those IDs
    const products = await prisma.product.findMany({
      where: { id: { in: ids } },
    });

    // Attach quantity to the product objects
    const productsWithQuantity = products.map((product) => {
      const cartItem = cartItems.find((item) => Number(item.id) === product.id);
      return {
        ...product,
        quantity: cartItem?.quantity ?? 0,
      };
    });

    return new Response(JSON.stringify(productsWithQuantity), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching shared cart products:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
