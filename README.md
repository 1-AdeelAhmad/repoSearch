# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes:

Generate GitHub PAT:
* Head over to Profile --> Settings --> Developer Settings --> Personal Access Token
* Generate a New token Enable these scopes:
    ** Repo/Public_Repo
* Create a .env in the root directory file and place your generated secret in the REACT_APP_GAT env var

Run Locally:

* `npm install` and then `npm start`

Local Docker Deployment:

* Same Steps to Generate a token as above however you can enter the secret key at runtime
* In Terminal: `docker-compose -f docker-compose.dev.yml up`

## Potential Improvements

* Obviously Pagination, Steps would include grabbing the cursor from the graphql api response and placing that in the before and after (graphql query) to fetch the next patch depending which direction the user wants to do.

#### Deployment

* Create a yaml file for git hub to read directly from the user's account by passing in the PAT name as a global variable 

