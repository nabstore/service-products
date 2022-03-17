import express from 'express';
import actions from './actions';
import authUtils from "../../utils/auth"

const router = express.Router();

router.get('/enderecos', authUtils.verifyAuth, actions.index);
router.post('/enderecos', authUtils.verifyAuth, actions.create);

export default router;