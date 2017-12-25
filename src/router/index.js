// @flow
import Router from 'koa-router';

const router = new Router();

router.get('/bye', (ctx) => {
  ctx.body = 'goodbye';
})

export default router;