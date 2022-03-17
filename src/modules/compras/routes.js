import express from 'express';
import comprasActions from './actions';
import authUtils from "../../utils/auth"

const router = express.Router();

router.post('/compras', authUtils.verifyAuth, comprasActions.create);
router.get('/compras', authUtils.verifyAuth, comprasActions.index);
router.get('/compras/:id', authUtils.verifyAuth, comprasActions.read);

export default router;