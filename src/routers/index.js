import MapRoutes from "./MapRoutes.js";
import GithubRouter from "./github/index.js";
import { RepositoryService } from "../services/github/index.js";

export default function (app) {
  app.use('/', new MapRoutes(app).router);
  app.use('/github', GithubRouter);

  const repoService = new RepositoryService();
  app.use('/repositories/:username', async (  req, res) => {
    const queryParams = req.query.exclude;
    let repositories = await repoService.getRepositoriesForUser(req.params.username, queryParams);
    const ownerData = await repoService.getRepositoryOwnerInformations(req.params.username);

    res.render('github/repositories', {
      owner: ownerData.data,
      repositories: repositories,
      repositoryService: repoService
    })
  });
}