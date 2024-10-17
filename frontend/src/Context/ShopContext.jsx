import React, { createContext, useState } from "react";
import { useProduct } from "../Api/Hooks";

export const ShopContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [search, setSearch] = useState("");
  const { products } = useProduct();

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subTotalPrice = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const totalPrice = () => {
    const subtotal = subTotalPrice();
    return subtotal - subtotal * discount;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalCartCount,
        promoCode,
        search,
        setPromoCode,
        applyPromoCode,
        subTotalPrice,
        totalPrice,
        handleSearch,
        filteredProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
