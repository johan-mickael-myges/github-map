import MapRoutes from "./MapRoutes.js";
import GithubRouter from "./github/index.js";

export default function (app) {
  app.use('/', new MapRoutes(app).router);
  app.use('/github', GithubRouter);

  // // Handle missing routes
  // app.get('*', (req, res) => {
  //   res.status(404).send('The page you are looking for does not exist');
  // });
}