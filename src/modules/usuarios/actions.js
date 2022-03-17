import { Usuario, TipoUsuario } from "../../models/index";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const index = async (req, res) => {
  // #swagger.tags = ['Usuarios']
  // #swagger.summary = 'Lista todos os usuarios.'
  const tipoUsuarioId = req.query.tipoUsuarioId;

  let whereClause = {};
  if (tipoUsuarioId) {
    whereClause = {
      tipoUsuarioId,
    };
  }

  try {
    const usuarios = await Usuario.findAll({
      where: whereClause,
      include: TipoUsuario,
    });
    res.status(200).send(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  // #swagger.tags = ['Usuarios']
  // #swagger.summary = 'Cria um novo usuário com senha encriptada.'
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.senha, salt, async (err, hash) => {
      const usuario = {
        nome: req.body.nome,
        tipoUsuarioId: req.body.tipoUsuarioId,
        email: req.body.email,
        senha: hash,
      };

      try {
        const newUsuario = await Usuario.create(usuario);
        newUsuario.senha = undefined;
        res.status(201).json(newUsuario);
      } catch (error) {
        res.status(400).send(error);
      }
    });
  });
};

const login = async (req, res) => {
  // #swagger.tags = ['Usuarios']
  // #swagger.summary = 'Efetua o login do usuário na aplicação.'
  try {
    const usuario = await Usuario.findOne({
      where: {
        email: req.body.email,
      },
      include: TipoUsuario,
    });

    if (usuario) {
      bcrypt.compare(req.body.senha, usuario.senha, (err, ok) => {
        if (ok) {
          const usuarioData = {
            id: usuario.id,
            tipoUsuarioId: usuario.tipoUsuarioId,
            nome: usuario.nome,
          };
          const token = jwt.sign(
            { usuario: usuarioData },
            process.env.JWT_SECRET,
            {
              expiresIn: 86400, // expires in 24h
            }
          );
          res.status(200).send({ token, usuario: usuarioData });
        } else {
          res.status(400).send({ error: "Email e/ou senha inválido(s)." });
        }
      });
    } else {
      res.status(400).send({ error: "Email e/ou senha inválido(s)sss." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const logout = (req, res) => {
  // #swagger.tags = ['Usuarios']
  // #swagger.summary = 'Efetua o logout do usuário na aplicação.'
  res.status(200).send({ token: null });
};

export default { index, create, login, logout };
