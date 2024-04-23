<h1>WA Map Optimizer 💪</h1>
<p>
  <a href="LICENSE.txt" target="_blank">
    <img alt="License: AGPL--3.0" src="https://img.shields.io/badge/License-AGPL--3.0-yellow.svg" />
  </a>
</p>

WorkAdventure Map Optimizer! Does your map need a diet?

## Requirements

- Node 16.15 <
-	Yarn 1.22 <

## Install

```sh
yarn add wa-map-optimizer
```

## Usage

```ts
import { optimize } from "wa-map-optimizer";

async function run() {
    await optimize("./example/map.json");
    console.log("Optimization finished");
}

run();
```

## Advanced usage

```ts
import { optimize } from "wa-map-optimizer";

async function run() {
    await optimize("./example/map.json", {
      tile: {
          size: 32,
      },
      logs: true,
      output: {
          path: "optimisation/new_map",
          map: {
            name: "awesome-map",
          },
          tileset: {
            prefix: "optimized",
            suffix: "tileset",
            size: 1024,
          }
      }
    });
    console.log("Optimization finished");
}

run();
```

## Author

👤 **Nolway (Alexis Faizeau)**

-   Website: [alexis-faizeau.com](https://www.alexis-faizeau.com)
-   Github: [@Nolway](https://github.com/Nolway)
-   LinkedIn: [@alexis-faizeau](https://linkedin.com/in/alexis-faizeau)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Nolway(Alexis Faizeau)](https://github.com/Nolway).<br />
This project is [AGPL--3.0](LICENSE.txt) licensed.
