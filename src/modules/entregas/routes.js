import express from 'express';
import actions from './actions';

const router = express.Router();

router.get('/entregas', actions.getEstimativa);

export default router;