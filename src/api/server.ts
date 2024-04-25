import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

import cacheControlMiddleware from "./middlewares/cacheControlMiddleware.js";
import corsMiddleware from './middlewares/corsMiddleware.js';
import httpsMiddleware from "./middlewares/httpsMiddleware.js";

import express from 'express';
const app = express();

app.use(corsMiddleware);
app.use(cacheControlMiddleware);

import * as path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'public')));
// Serve main.js from the root directory
app.get('/main.js', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'main.js'), {
        headers: {
            'Content-Type': 'application/javascript',
        },
    }, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    });
});

import registerRoutes from "./routers/index.js";
registerRoutes(app);

const PORT = 8877;

httpsMiddleware(app).listen(PORT, () => {
    console.log(`Workadventure for Developers server is running on port: ${PORT}`);
});