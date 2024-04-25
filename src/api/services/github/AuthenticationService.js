import { Octokit } from "octokit";

const headers = {

}

export default class AuthenticationService {
    constructor(options) {
        this.isAuthenticated = false;
        this.octokit = new Octokit(options);
    }

    async checkAuthentication() {
        try {
            const res = await this.octokit.request("GET /user");
            this.isAuthenticated = true;
        } catch (error) {
            console.log(error);
            this.isAuthenticated = false;
        }
    }
}