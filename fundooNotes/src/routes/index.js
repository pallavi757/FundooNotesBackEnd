import express from 'express';
const router = express.Router();

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {    //check for endpoint
    res.json('Welcome to User Registration');
  });
  router.use('/signup', userRoute);

  return router;
};

export default routes;
