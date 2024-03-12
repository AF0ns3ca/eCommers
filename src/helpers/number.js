export const formatPrice = (amount) => {
   return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", currencyDisplay: "narrowSymbol" }).format(amount);
};

export const formatRating = (rating) => {
   return Number(rating).toFixed(1);
}