import { exec } from 'child_process';
import GitUrlParse from 'git-url-parse';

export default class LocalProjectService {
    constructor() {
        this._data = {};
    }
    async setup() {
        const cmd = 'git config --get remote.origin.url';

        this.data = await new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                resolve(GitUrlParse(stdout.trim()));
            });
        });

        return this;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }
}