import { tipoUsuario } from "./constants";
import jwt from 'jsonwebtoken';

const verifyAuth = (req, res, next) => {
  // #swagger.ignore = true
  let token = req.headers['authorization'];

  if (!token) return res.status(401).send({ message: 'Nenhum token encontrado.' });

  if (token.startsWith("Bearer ")) {
    token = token.substring(7, token.length);
  }
  
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err) return res.status(401).send({ message: 'Falha na autenticação.', err });
    console.log(decoded)
    req.usuario = decoded.usuario;
    next();
  });
};

const isColaborator = (req, res, next) => {
  // #swagger.ignore = true
  if (!req.usuario) {
    return res.status(401).send({ message: 'Nenhum token encontrado.' });
  }

  if (req.usuario.tipoUsuarioId === tipoUsuario.COLABORADOR) next();
  else res.status(403).send({ msg: "Sem autorização", user: req.usuario });
};

export default { verifyAuth, isColaborator };
