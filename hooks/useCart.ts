// hooks/useCart.ts
import { useCartContext } from "../context/cartContext";

export const useCart = () => {
  const { state, dispatch, isCartOpen, toggleCart } = useCartContext();

  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const updateItemQuantity = (id: number, quantity: number) =>
    dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: { id, quantity } });

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = state.items.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const cartDetails = state.items.map((item) => ({
    id: item.id,
    image: item.image,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    description: item.description,
  }));

  const handleCartClick = () => toggleCart(!isCartOpen);

  return {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
    total,
    cartDetails,
    cartCount,
    shouldDisplayCart: isCartOpen,
    handleCartClick,
    toggleCart,
    updateItemQuantity,
  };
};
