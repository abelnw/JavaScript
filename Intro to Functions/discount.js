function applyDiscountCode(total, discountCode) {
    switch(discountCode) {
        case 'SAVE10':
            return total - total * 0.1;
        case 'SAVE20':
            return total - total * 0.2;
        default:
            return total;
    }
}

console.log(applyDiscountCode(100, 'APPLE'));
console.log(applyDiscountCode(100, 'SAVE10'));
console.log(applyDiscountCode(100, 'SAVE20'));
