import MyRepositoryRoutes from "./MyRepositoryRoutes.js";

import express from "express";

export default class MyGithubRoutes {
    constructor() {
        this._router = express.Router();
        this.myRepositoryRouter = new MyRepositoryRoutes().router;
        this.setup();
    }

    setup() {
        this._router.use('/repositories', this.myRepositoryRouter);
    }

    get router() {
        return this._router;
    }
}