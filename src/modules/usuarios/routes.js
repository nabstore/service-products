import express from 'express';
import usersActions from './actions';

const router = express.Router();

router.get('/usuarios', usersActions.index);
router.post('/usuarios', usersActions.create);
router.post('/login', usersActions.login);
router.get('/logout', usersActions.logout);

export default router;