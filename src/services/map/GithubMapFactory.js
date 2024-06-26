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

        await this.setMapRepositoryFullNameValue(repositoryData.data.full_name || 'workadventure/workadventure');
        await this.setMapRepositoryOwnerValue(repositoryData.data.owner?.login || 'workadventure');
        await this.setMapRepositoryText(repositoryData.data.name || 'workadventure');
        await this.setMapRepositoryUrlToBrowse(repositoryData?.data?.html_url || 'https://github.com/workadventure/workadventure');
        await this.setMapEmbeddedReadmeUrl(await this.repositoryService.generateEmbeddedMarkdownURl(repositoryData.data));

        const languagesData = await this.repositoryService.getRepositoryLanguages(repositoryData?.data?.languages_url, 5);
        await this.setMapRepositoryLanguages(languagesData, this.repositoryService);
        await this.setMapRepositoryDescriptionPopupText(repositoryData?.data);

        const ownerData = await this.repositoryService.getRepositoryOwnerInformationsByRepository(repositoryData?.data);
        await this.setUsernameOnScreenText(ownerData?.data?.login);
        await this.setUserFollowersText(ownerData?.data);
        await this.setMapOwnerInformationsPopupText(ownerData?.data);
        await this.setMapOwnerUrl(ownerData?.data?.html_url);

        return this;
    }
}