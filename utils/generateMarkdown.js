// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![Licence:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "IBM") {
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
  } else if (license === "Boost") {
    return "![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else return `[licence](this.licence)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else if (license === "Boost") {
    return `## License
  This project is license under the [License: Boost](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "Mozilla") {
    return `## License
This project is license under the[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "IBM") {
    return `## License
This project is license under thes '[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "MIT") {
    return `## License
This project is license under the [License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache 2.0") {
    return `## License
This project is license under the [License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}

##Video Demonstration<br>
[Videolink](https://drive.google.com/file/d/1arcAQ1DKXlp5ARww0NYt8srPjvLTCczZ/view)
 
  ## Table Of Contents
  - [Project Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributing](#contributors)
  - [Tests](#tests)
  - [Git Hub Repo](#username)
  - [Email Address](#email)


  
 
  ## Installation 
  ${data.installation}
  
## Usage
  ${data.usage} 
 
   ## License
   ${renderLicenseBadge(data.license)}
   ${renderLicenseLink(data.license)}
   ${renderLicenseSection(data.license)}
   
   ## Contributors
   ${data.contributing}
   
   ## Test Cases
   ${data.test}
   
  ## Git Hub Repo
  [Github](https://github.com/${data.username})<br>
  ${data.username}
   
  
  ## Email Address
  ${data.email}
   
`;
}

module.exports = generateMarkdown;

//referred ASK BCS//
//referrd https://www.youtube.com/watch?v=QFV7jzu8mKw//
//referred ashachakre0906/Professional-README-Generator//
