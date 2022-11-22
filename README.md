# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes:

Generate GitHub PAT:
* Head over to Profile --> Settings --> Developer Settings --> Personal Access Token
* Generate a New token Enable these scopes:
    ** Repo/Public_Repo
* Create a .env in the root directory file and replace XXXX for REACT_APP_GAT with your new generated secret

Run Locally:

* `npm install` and then `npm start`

Local Docker Deployment:

* Same Steps to Generate a token as above however you can enter the secret key at runtime




Production Docker Deployment:


## Potential Improvements


#### Deployment

* Create a yaml file for git hub to read directly from the user's account by passing in the PAT name as a variable 

