import { Cartao, Compra, CompraItem, Endereco, Produto } from "../../models/index";

const create = async (req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Realiza uma compra e salva no banco.'
  try {
    const compra = await Compra.create({
      usuarioId: req.session.userId,
      enderecoId: req.body.enderecoId,
      cartaoId: req.body.cartaoId,
      date: new Date(),
    });

    const compraItens = req.body.produtos.map((produto) => ({
      ...produto,
      compraId: compra.id,
    }));

    const novoCompraItens = await CompraItem.bulkCreate(compraItens);

    for (let produto of req.body.produtos) {
      await Produto.decrement(
        { estoque: produto.quantidade },
        {
          where: {
            id: produto.produtoId,
          },
        }
      );
    }

    res.status(201).send({ compra, novoCompraItens });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const index = async(req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Retorna uma lista com todas as compras do usuário logado'
  try {
    const compras = await Compra.findAll({ 
      where: {
        usuarioId: req.session.userId
      },
      include: [CompraItem],
    });
    res.status(200).send(compras);
  } catch (error) {
    res.status(500).send(error);
  }
};

const read = async (req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Retorna os dados de uma compra do usuário logado.'
  const id = req.params.id;
  try {
    const compra = await Compra.findOne({
      where: {
        usuarioId: req.session.userId,
        id,
      },
      include: [Cartao, CompraItem, Endereco],
    });

    if (!compra) {
      return res.status(404).send({
        error: `Compra ${id} não encontrado`,
      });
    }

    res.status(200).send(compra);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { create, index, read };
