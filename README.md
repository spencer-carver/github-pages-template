# template

## Installation instructions
1. download Node.js 22.x
2. Clone this repo to your filesystem, and navigate to the root directory.
3. run `npm ci` to get a full install of the locked versions in the `package-lock.json` file.
4. run `npm start` to see the app locally

## Steps to build your own web-app
1. Configure github pages to build from the `/docs` folder in the root directory on the `main` branch. This is done from the github Settings in the browser, not in the codebase
2. Make any changes to the contents of the page (search "Hello World" to find the optimal place to make changes). Save changes
3. `npm run build` will create the static export for github-pages.
4. Commit changes and push to github pages. The new changeset should be avaiable within a minute.
5. Visit the github pages page on your mobile device. (Browser dependent) you should be able to install the page as a PWA (progressive web app) and access it from your phone's home screen in the future. Follow the instructions on the [web.dev page](https://web.dev/learn/pwa/installation#installation_criteria) about installing PWAs for more info. (NOTE: This repo does not contain the apple-touch-icon images yet).

## Notes
* updating the contents of `/public`, namely `manifest.json`, `favicon.ico`, `launcher-icon-192.png`, and `launcher-icon-512.png` are the main ways to interact with the PWA install features.
* You can provide custom installation instructions with the "[onbeforeinstall](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event)" prompt.
