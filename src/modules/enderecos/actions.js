import { Endereco } from "../../models/index";

const index = async (req, res) => {
  // #swagger.tags = ['Enderecos']
  // #swagger.summary = 'Lista os endereços de um usuário.'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  const id = req.usuario.id;

  if (!id) {
    res.status(400).send({ msg: "Informe um ID de usuário." });
  }

  try {
    const enderecos = await Endereco.findAll({
      where: {
        usuarioId: id,
      },
    });

    res.status(200).send(enderecos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  // #swagger.tags = ['Enderecos']
  // #swagger.summary = 'Cria um novo endereço para um usuário.'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  const id = req.usuario.id;
  const endereco = {
    usuarioId: id,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    uf: req.body.uf,
    cep: req.body.cep,
  }
  
  try {
    const newEndereco = await Endereco.create(endereco);
    res.status(200).send(newEndereco);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { index, create };
