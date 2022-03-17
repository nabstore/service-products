export const getEstimatedDeliveryDate = (cep) => {
  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 7);
  return { estimatedDeliveryDate, preco: 0, cep };
};
