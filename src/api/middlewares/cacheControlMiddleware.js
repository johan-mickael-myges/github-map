export default function cacheControlMiddleware(app, req, res, next) {
    app.use((req, res, next) => {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        next();
    });
};