# Paypossible

Client side code base for Paypossible. This project is the front-end of Paypossible, and wires in to the back-end portion, which is a located in the following repository: `https://gitlab.com/paydapp/`

## Main Libraries

1. React.js
2. Redux
3. Material-ui
4. Next.js
5. Agent/Superagent for api
6. Netlify for deployment

## Getting Started

1. Clone the repo to your local directory.
2. After navigating to the directory, run `npm install --save` to install and save dependencies.
3. Run `npm run dev` to run Next.js locally.
4. Run `npm run fix` to run linter and correct errors.
5. Run `npm run test` to run tests.
6. `npm run netlify` will run Netlify locally, build the files, and export static files to `out` directory.

## Project Architecture

1. Start from the `pages` directory, which contain the main Next.js pages of the website/application.
2. The components in `pages` can be found in the `components` directory. These are the React view components for the respective `pages`.
3. The Redux store, actions and reducers are located in the `redux` directory.
4. The Superagent API functions are in the `api` directory.
5. The `utils` directory contains all the static utilities (styling, helper functions, api keys etc) used in the project.
7. Tests and styles for the React components are in the respective directories of each component.

## Deployment

1. Run `git push origin [branch_name]` to push to remote Gitlab project. This command will automatically build a new branch in Netlify.
2. Navitage to `Netlify (https://www.netlify.com/)`, sign-in to Paypossible account, and view the deploy under the "Deploys" tab.

## Authors

`Sandeep Chandran and Michael Lavers`
