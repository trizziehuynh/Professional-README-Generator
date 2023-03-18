const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use",
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide the guidlines for the contributors ",
    },
    {
      type: "input",
      name: "test",
      message: "Provide an examples on how to run this project",
    },
    {
      type: "list",
      name: "license",
      message: "Provide the license for this project",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "ISC", "None"],
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then((data) => {
    let element = `
    
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# ${data.title}


## Description
${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contributing)
- [License](#license)
- [Tests](#tests)
- [Additional Quetions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}

## Tests
${data.test}

## Questions

If you have futher questions, please reach out to me via email.

- [GitHub](${data.user})
- [Email](${data.email})

    `;

    fs.writeFile("CustomREADME.md", element, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
