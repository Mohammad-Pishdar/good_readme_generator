const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project"
    },
    {
        type: "input",
        name: "installation instructions",
        message: "Enter installation instructions for your project"
    },
    {
        type: "input",
        name: "usage information",
        message: "Enter usage information for your project"
    },
    {
        type: "input",
        name: "contribution guidelines",
        message: "Enter contribution guidelines for your project"
    },
    {
        type: "input",
        name: "test instructions",
        message: "Enter test instructions for your project"
    },
    {
        type: "list",
        name: "licence",
        message: "Choose a licence for your project",
        choices: ['MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0']
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }
]

function promptUser() {
    return inquirer.prompt(questions);
}

// function to write README file
// function writeToFileAsync(fileName, data) {}

// function to initialize program
async function init() {

    const answers = await promptUser();
    console.log(generateMarkdown(answers));
}

// function call to initialize program
init();