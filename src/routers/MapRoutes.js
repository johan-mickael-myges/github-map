import express from "express";
import GithubMapFactory from "../services/map/GithubMapFactory.js";

import map from "../data/map.js";

export default class MapRoutes {
  constructor() {
    this._router = express.Router();
    this.setup();
  }

  setup() {
    this._router.get('/:ghurl', async (req, res) => {
      let URL = req.params.ghurl || '';
      if (URL === 'favicon.ico') {
        res.send('');
        return;
      }
      console.log('URLB' + URL);
      URL = Buffer.from(URL, 'base64').toString('ascii');

      if (!URL) {
        res.send(map);
        return;
      }

      try {
        const githubMapFactory = new GithubMapFactory(URL);
        const data = await githubMapFactory.factory();
        res.send(data.map);
      } catch (error) {
        console.log(error);
        res.send(map);
      }
    });
  }

  get router() {
    return this._router;
  }
}