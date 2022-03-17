import { Cartao } from "../../models/index";

const create = async (req, res) => {
  // #swagger.tags = ['Cartao']
  // #swagger.summary = 'Cria um novo cartão para o usuário logado.'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  try {
    const cartao = await Cartao.create({
      usuarioId: req.usuario.id,
      number: req.body.number,
      apelido: req.body.apelido,
      validade: req.body.validade,
      cvv: req.body.cvv,
      titular: req.body.titular,
    });
    res.status(201).send(cartao);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const index = async(req, res) => {
  // #swagger.tags = ['Cartao']
  // #swagger.summary = 'Retorna uma lista com todos os cartões do usuário logado'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  try {
    const cartoes = await Cartao.findAll({ 
      where: {
        usuarioId: req.usuario.id
      },
    });
    res.status(200).send(cartoes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { create, index };
