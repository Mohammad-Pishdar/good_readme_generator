// function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge;

  if (`${data.license}` === 'MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (`${data.license}` === 'GNU Lesser General Public License v3.0') {
    licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (`${data.license}` === 'Mozilla Public License 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (`${data.license}` === 'GNU Affero General Public License v3.0') {
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (`${data.license}` === 'The Unlicense') {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (`${data.license}` === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation

  ${data.installation_instructions}

  ## Usage

  ${data.usage_information}

  ## License

  This application uses ${data.license}

  ## Contributing

  ${data.contribution_guidelines}

  ## tests

  ${data.test_instructions}

  ## Questions

  For further information please visit my [Github profile](https://github.com/${data.github}). If you have any questions
  send an email to ${data.email}.

`;
}

module.exports = generateMarkdown;