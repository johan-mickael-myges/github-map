import cors from 'cors';

import dotenv from "dotenv";
dotenv.config();

let corsMiddleware = {};

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'GET',
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization'
};

export default corsMiddleware = cors(corsOptions);