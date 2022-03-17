import {
  Cartao,
  Compra,
  CompraItem,
  Endereco,
  Produto,
} from "../../models/index";
import { getEstimatedDeliveryDate } from "../entregas/usecases/getEstimatedDeliveryDate";
const { Op } = require("sequelize");

const create = async (req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Realiza uma compra e salva no banco.'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 7);
  const estimative = getEstimatedDeliveryDate("");
  try {
    const total = req.body.produtos.reduce(
      (prev, atual) => prev + atual.quantidade * atual.precoUnit,
      0
    );
    const compra = await Compra.create({
      usuarioId: req.usuario.id,
      enderecoId: req.body.enderecoId,
      cartaoId: req.body.cartaoId,
      estimatedDeliveryDate: estimative.estimatedDeliveryDate,
      total,
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

const index = async (req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Retorna uma lista com todas as compras do usuário logado'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  try {
    // Realiza a entrega de compras cuja entrega estimada já foi alcançada
    const today = new Date();
    await Compra.update(
      { deliveredAt: today },
      {
        where: {
          estimatedDeliveryDate: {
            [Op.lt]: today,
          },
        },
      }
    );

    const compras = await Compra.findAll({
      where: {
        usuarioId: req.usuario.id,
      },
      include: [CompraItem],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).send(compras);
  } catch (error) {
    res.status(500).send(error);
  }
};

const read = async (req, res) => {
  // #swagger.tags = ['Compras']
  // #swagger.summary = 'Retorna os dados de uma compra do usuário logado.'
  /* #swagger.security = [{
      "bearerAuth": []
  }] */
  const id = req.params.id;
  try {
    const compra = await Compra.findOne({
      where: {
        usuarioId: req.usuario.id,
        id,
      },
      include: [
        Cartao,
        Endereco,
        {
          model: CompraItem,
          include: [Produto],
        },
      ],
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
