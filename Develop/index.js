let fs = require("fs");
const inquirer = require("inquirer");
const util = require('util')
let generate = require("./generateMarkdown.js");
const axios = require("axios");

fs.writeFile = util.promisify(fs.writeFile)
//Questions to retrieve README information
const questions = [
    {
    type: "input",
    message: "What is your Github username?",
    name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the URL to your project?",
        name: "url"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectname"
    },
    {
        type: "input",
        message: "Please give a short description of your project: ",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What des the user need to know about contributing to this repo?",
        name: "contribute"
    },
]

async function init() {
try{
   const response = await inquirer.prompt(questions);
   const res = await axios.get(`https://api.github.com/users/${response.username}`)
   let avatar = res.data.avatar_url;
   const data = generate({...response, avatar});
    await fs.writeFileSync("README.md", data); 
}catch(err){
    console.log(err)
}
}

init();
