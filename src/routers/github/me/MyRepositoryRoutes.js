import {RepositoryService} from "../../../services/github/index.js";

import express from "express";
import dotenv from 'dotenv';
dotenv.config();

export default class MyRepositoryRoutes {
    constructor() {
        this._router = express.Router();
        this.repositoryService = new RepositoryService({
            auth: process.env.GHTOOLS_PASSWORD
        });
        this.setup();
    }

    setup() {
        this._router.get("/", async (req, res) => {
            try {
                const repositories = await this.repositoryService.getRepositories();
                res.send(repositories || []);
            } catch (error) {
                res.send([]);
            }
        });
    }

    get router() {
        return this._router;
    }
}