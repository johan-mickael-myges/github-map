import AuthenticationService from "./AuthenticationService.js";
import { defaultHeaders as headers } from "./constants.js";
import GitUrlParse from 'git-url-parse';
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export default class RepositoryService {
    constructor(options) {
        if (options && process.env.GHTOOLS_PASSWORD) {
            options.auth = process.env.GHTOOLS_PASSWORD;
        }
        this.authService = new AuthenticationService(options);
    }

    async getRepositories(options) {
        const username = options?.username;
        if (username) {
            return await this.getRepositoriesForUser(username);
        }
        return [];
    }

    async getRepositoriesForUser(username, exclude = '') {
        let repositories = await this.authService.octokit.request("GET /users/{username}/repos", {
            username,
            headers
        });

        return repositories.data.filter(repo => repo.name !== exclude);
    }

    async getRepositoryByURL(url) {
        const gitUrl = GitUrlParse(url);
        try {
            return await this.authService.octokit.request("GET /repos/{owner}/{repo}", {
                owner: gitUrl.owner,
                repo: gitUrl.name,
                headers
            });
        } catch (error) {
            console.error(error);
            if (error.status === 404) {
                return await this.authService.octokit.request("GET /repos/workadventure/workadventure", {
                    headers
                });
            }

            throw new Error("An error occurred while fetching the repository.");
        }
    }

    async getRepositoryLanguages(url, limit = 5) {
        const languages = await axios.get(url);
        const totalBytes = Object.values(languages.data).reduce((a, b) => a + b, 0);
        const data = Object.keys(languages.data).map(key => {
            return {
                name: key,
                value: languages.data[key],
                percentage: ((languages.data[key] / totalBytes) * 100).toFixed(1)
            }
        });

        if (data.length > limit) {
            // return only first 5 languages if there are more than 5 languages
            data.length = limit;
        }

        return data;
    }

    async formatRepositoryLanguagesData(languages) {
        let languagesTextItem = ['\n'];
        const emojies = [
            '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
        languages.forEach((language, index) => {
            languagesTextItem.push(`\t\t${emojies[index]} ${language.name} (${language.percentage}%)\n`);
        });

        return languagesTextItem.join(' ');
    }

    async generateReadmeUrlByRepository(repositoryData) {
        return repositoryData?.html_url + `/blob/${repositoryData.default_branch}/README.md`;
    }

    async generateEmbeddedMarkdownURl(repositoryData) {
        let embeddedUrl = 'https://emgithub.com/iframe.html?target=';
        let repoUrl = await this.generateReadmeUrlByRepository(repositoryData);
        return embeddedUrl + encodeURIComponent(repoUrl) + '&type=markdown&style=monokai';
    }

    async getRepositoryOwnerInformationsByRepository(repositoryData) {
        return await this.authService.octokit.request("GET /users/{username}", {
            username: repositoryData.owner.login,
            headers
        });
    }

    async getRepositoryOwnerInformations(username) {
        return await this.authService.octokit.request("GET /users/{username}", {
            username: username,
            headers
        });
    }
}
