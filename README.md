# My First ExpressJS app

## Introduction
Hi, Everyone! I'm starting my journey into utilizing GitHub and building a local ExpressJS application / API server. 

### What's the reason for this repo? 
Specifically to satisfy two goals: 
1) Devry University's Module 7 from course SIS150 assignment
2) Understanding some basics of GitHub commands

## How to
### Run
1) Ensure NodeJS installed on machine
2) Ensure browser extention to allow modification of headers (or using API tool like Postman or APIDog)
3) Clone repo to desired destination
4) Create .env file in root folder
    - should have "username" and "password" variables
5) Open terminal to cloned repo destination root folder
6) run in CLI: npm i
7) run in CLI: npm start
8) Open browser to "localhost:3000" or use API Tool
    - you should get unauthorized
9) Use browser extention to modify request headers with "username" and "password" / API Tool to add the two headers
    - you can test the misconfigured credentials or add the ones you had in your .env file
10) Now request the routes in main.ts

### Test
1) ensure the above is working
2) ensure CLI is at root
3) run in CLI: npm test
4) results:
    - should have all passing tests
    - failed tests mean you did not install the dev dependancies

## Where to now? 
I'll keep building on this since it's fun to me. I might add some random things to make API calls on and maybe start looking at a front end for it. Only time will tell! 