// Because we currently develop on localhost,
// we need to use https to test the service worker.

import https from 'https';
import fs from 'fs';

const options = {
    key: fs.readFileSync('certs/key.pem'),
    cert: fs.readFileSync('certs/cert.pem')
};

export default function httpsMiddleware(app) {
    return https.createServer(options, app);
};