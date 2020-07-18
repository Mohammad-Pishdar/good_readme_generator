// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  
  * [Installation] (#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ##Installation

  ${data.installation_instructions}

  ## Usage

  ${data.usage_information}

  ## License

  This application uses ${data.license}

  ## Contributing

  ${data.contribution_guidelines}

  ## tests

  ${data.test_instructions}

  ##Questions

  For further information please visit my [Github profile] (${data.github}). If you have any questions
  send an email to ${data.email}.

`;
}

module.exports = generateMarkdown;