import MapFactory from "./MapFactory.js";
import { RepositoryService } from "../github/index.js";

export default class GithubMapFactory extends MapFactory {
    constructor(url) {
        super();
        this.url = url;
        this.repositoryService = new RepositoryService();
    }

    async factory() {
        const repositoryData = await this.repositoryService.getRepositoryByURL(this.url);
        console.log(repositoryData);
        const repositoryName = repositoryData.data.full_name;

        await this.setMapRepositoryText(repositoryName);
        await this.setMapRepositoryUrlToBrowse(repositoryData?.data?.html_url || 'https://github.com/workadventure/workadventure');
        await this.setMapEmbeddedReadmeUrl(await this.repositoryService.generateEmbeddedMarkdownURl(repositoryData.data));

        const languagesData = await this.repositoryService.getRepositoryLanguages(repositoryData?.data?.languages_url, 5);
        await this.setMapRepositoryLanguages(languagesData, this.repositoryService);
        await this.setMapRepositoryDescriptionPopupText(repositoryData?.data);

        return this;
    }
}