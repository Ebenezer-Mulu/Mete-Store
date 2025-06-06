"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: any;
  description: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" }
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: "UPDATE_ITEM_QUANTITY"; payload: { id: number; quantity: number } };

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  isCartOpen: boolean;
  toggleCart: (open: boolean) => void;
}>({
  state: initialState,
  dispatch: () => null,
  isCartOpen: false,
  toggleCart: () => {},
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (exists) {
        // Do not add or update the existing item
        return state;
      } else {
        // Add new product
        return { items: [...state.items, action.payload] };
      }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return { items: [] };
    case "SET_CART":
      return { items: action.payload };
    case "UPDATE_ITEM_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = (open: boolean) => setIsCartOpen(open);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      dispatch({ type: "SET_CART", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
