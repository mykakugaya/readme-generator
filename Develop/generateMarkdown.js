function generateMarkdown(data) {
    return `# ${data.projectname}
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
${data.install}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribute}

## Tests
To run tests, run the following command:
${data.tests}

## Questions
If you have any questions about this repo, open an issue or contact ${data.username} directly at ${data.email}.

`;
} 

module.exports = {generateMarkdown: generateMarkdown}