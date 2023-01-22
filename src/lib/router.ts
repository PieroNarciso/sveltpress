import express from 'express';

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

router.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});


export default router;
