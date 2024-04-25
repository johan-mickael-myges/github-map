import AuthenticationService from "./AuthenticationService.js";
import { defaultHeaders as headers } from "./constants.js";
import GitUrlParse from 'git-url-parse';
import axios from "axios";

export default class RepositoryService {
    constructor(options) {
        this.authService = new AuthenticationService(options);
    }

    async getRepositories(options) {
        // Authentication disabled for now
        // await this.authService.checkAuthentication();

        const username = options?.username;
        if (!this.authService.isAuthenticated || username) {

            if (username) {
                return await this.getRepositoriesForUser(username);
            }
        }

        throw new Error("You are not authenticated!, please specify a username to get the repositories for.");
        // return await this.authService.octokit.request("GET /user/repos", {
        //     headers
        // });
    }

    async getRepositoriesForUser(username) {
        return await this.authService.octokit.request("GET /users/{username}/repos", {
            username,
            headers
        });
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

    async getRepositoryLanguages(url) {
        const languages = await axios.get(url);
        const totalBytes = Object.values(languages.data).reduce((a, b) => a + b, 0);
        const data = Object.keys(languages.data).map(key => {
            return {
                name: key,
                value: languages.data[key],
                percentage: ((languages.data[key] / totalBytes) * 100).toFixed(1)
            }
        });

        if (data.length > 5) {
            // return only first 5 languages if there are more than 5 languages
            data.length = 5;
        }

        return data;
    }

    async formatRepositoryLanguagesData(languages) {
        let languagesTextItem = [];
        const emojies = ['🔵', '🟢', '🟠', '🟣', '🟡'];
        languages.forEach((language, index) => {
            languagesTextItem.push(`${emojies[index]}${language.name}(${language.percentage}%)`);
        });

        return languagesTextItem.join(' ');
    }
}