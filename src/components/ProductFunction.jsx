export const getCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
};