import express from "express";

import MyGithubRoutes from "./me/index.js";
import OthersGithubRoutes from "./others/index.js";

const router = express.Router();

router.use('/me', new MyGithubRoutes().router);
router.use('/others', new OthersGithubRoutes().router);

export default router;