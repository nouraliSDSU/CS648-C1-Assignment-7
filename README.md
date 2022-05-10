# Company Inventory Page

Assignment 6. Added Bootstrap

## Initial Step

Go to Api folder and run `npm run install` to install all the dependencies.\
Go to Ui folder and run `npm run install` to install all the dependencies.

## Development server

Go to Api folder and run `npm run start` to bring up the Api server.\
Go to Ui folder and run `npm run start` to bring up the UI.\
Navigate to `http://localhost:8000/` to interact with the application.

## GraphQL Playground

Open `http://localhost:3000/graphql` to interact with the API using GraphQL Playground.

## Compile Watch Mode

Go to UI folder and run `npm run watch` to make babel watch for changes in files. Make any changes and the changes will be reflected without any refresh. Make sure you have started the server as per the previous step.

## MongoDB reset

From Api folder, you can run `mongosh "mongodb+srv://cluster0.txcqn.mongodb.net/InventoryTracker" --apiVersion 1 --username nour scripts/init.mongo.js` and enter password as `Hassan56` to reset the database with two products added initially. You may need to use `mongo` instead of `mongosh` depending on installed software.

## Lint check

To check for lint issues, go to Api and Ui folder and run `npm run lint` to get the linting issues in the respective folders.
