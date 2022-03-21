import express from "express";
import produtosActions from "./actions";
import authUtils from "../../utils/auth";
import uploadFileMiddleware from "../../middlewares/uploadFile";

const router = express.Router();

router.get("/produtos", produtosActions.index);
router.get("/produtos/ofertas", produtosActions.offers);
router.post(
  "/produtos",
  authUtils.verifyAuth,
  authUtils.isColaborator,
  uploadFileMiddleware,
  produtosActions.create
);
router.get("/produtos/:id", produtosActions.read);
router.put(
  "/produtos/:id",
  authUtils.verifyAuth,
  authUtils.isColaborator,
  produtosActions.update
);
router.delete(
  "/produtos/:id",
  authUtils.verifyAuth,
  authUtils.isColaborator,
  produtosActions.del
);
router.get("/produtos/:id/image", produtosActions.getImage);
router.put(
  "/produtos/estoque/decrement",
  produtosActions.decrementProductsEstoque
);

export default router;
