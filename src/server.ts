import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (_req, res) => {
    res.send('Hello World from Express with TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
