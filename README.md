# Penjar - PostgreSQL Express Node Jest Axios React

Penjar.js is the fastest way to spin up a Full Stack application (React + Node) with Jest testing. Evolution and based off of the [Careen](https://github.com/NguyenAndrew/careen) stack. 

## Architecture

![Architecture](diagrams/architecture.drawio.png)

## QuickStart - Running Locally
1. Navigate to the run_locally directory
2. Open terminal of choice in the run_locally directory
3. Install your dependencies with ```npm install```
5. Run your application with ```npm run start``` (Note: `start:windows`, `start:linux`, and `start:mac` are also available)
6. Ready to Code!

## Quickstart - Editting Diagrams
1. Download [Draw.io Desktop Edition](https://github.com/jgraph/drawio-desktop/releases)
2. In diagrams folder, open architecture.drawio.png in Draw.io Desktop Edition
3. Make changes
4. Click save button!

## Quickstart - (Optional) Configuring a database
1. Navigate to the back_end directory
2. For local setup: Create a database.json file in the **src/database** directory, configure this information with database credentials (Note: database.json in back_end directory is excluded by git in .gitignore).
3. For cloud setup: Place database credentials within env variables, parse this information by inserting custom code into databaseInfo.ts
4. Configure database client

## Roadmap
* Run on Docker
* Setup Jest testing on the backend