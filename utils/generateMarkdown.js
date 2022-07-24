// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    return "![Licence:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if(licence==="Apache 2.0"){
    return "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }else if (license==="IBM"){
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licence==='none') {
    return '';

  }   else return `[licence](licence)`;
 

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # DATA
  ${data.installation}
  # DESCRIPTION
  ${data.description}
  # ${data.usage}
  # ${data.description}
  # ${data.description}
  # ${data.description}
  # ${data.description}
  # ${data.description}
  

`;
}

module.exports = generateMarkdown;
