// src/utils/localStorage.js

export const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return [];
  }
};

export const saveCartToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};
