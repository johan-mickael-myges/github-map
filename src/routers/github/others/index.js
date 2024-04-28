import GithubUserRepositoryRoutes from "./GithubUserRepositoryRoutes.js";

import express from "express";

export default class OthersGithubRoutes {
    constructor() {
        this._router = express.Router();
        this.githubUserRepositoryRouter = new GithubUserRepositoryRoutes().router;
        this.setup();
    }

    setup() {
        this._router.use('/repositories', this.githubUserRepositoryRouter);
    }

    get router() {
        return this._router;
    }
}