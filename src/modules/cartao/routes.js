import express from 'express';
import cartoesActions from './actions';
import authUtils from "../../utils/auth"

const router = express.Router();

router.post('/cartao', authUtils.verifyAuth, cartoesActions.create);
router.get('/cartao', authUtils.verifyAuth, cartoesActions.index);

export default router;