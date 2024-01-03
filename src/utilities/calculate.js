const getTotalPrice = seletedCart => {
    const price = (privious, current) => privious + current.price;
    const total = seletedCart.reduce(price, 0);
    return total;
};
const getTotalShipping = seletedShipping => {
    const getReduce = (privious, current) => privious + current.shipping;
    const total = seletedShipping.reduce(getReduce, 0);
    return total;
};


export { getTotalPrice, getTotalShipping }

//ei dui function er use hosse na 