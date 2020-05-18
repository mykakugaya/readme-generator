function generateMarkdown(data) {
    return `![NPM Version](https://img.shields.io/npm/v/npm?style=flat)
![NPM License](https://img.shields.io/static/v1?label=license&message=${data.license}&color=brightgreen)

# ${data.projectname}
${data.url}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
> ${data.install}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribute}

## Tests
To run tests, run the following command:
> ${data.tests}

## Questions
<img src="${data.avatar}" width="100px" alt="Github Profile"><br>
If you have any questions about this repo, open an issue or contact ${data.username} directly at ${data.email}.
`;
}

module.exports = generateMarkdown;