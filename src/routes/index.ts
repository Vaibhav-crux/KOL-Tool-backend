import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'Welcome to Express' });
});

export default router;
