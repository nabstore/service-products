import { getEstimatedDeliveryDate } from "./usecases/getEstimatedDeliveryDate";

const getEstimativa = (req, res) => {
  // #swagger.tags = ['Entregas']
  // #swagger.summary = 'Calcula a estimativa de entrega para um CEP.'
  const cep = req.query.cep;
  const estimative = getEstimatedDeliveryDate(cep);
  res.status(200).send(estimative);
};

export default { getEstimativa };
