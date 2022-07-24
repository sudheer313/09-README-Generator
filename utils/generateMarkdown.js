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
  } else return `[licence](licence)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else return `[licence](licence)`;
if(license==='Apache 2.0'){
  return `## License
  License is [License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
}else if(license==='Mozilla'){
  return `## Licence
  License is [License: Mozilla] [License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
}else if (license==='IBM'){
  return `## License
  License is [License: IBM](https://opensource.org/licenses/MPL-2.0)`;
  
}else if (license==='Boost'){
  return `## Licence
  License is [License: Boost](https://www.boost.org/LICENSE_1_0.txt)`;
} else if (license==='none'){
  return '';
}

}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # DATA
  ##${data.description}
 
  ## iNSTALLATION sTEPS
  ${data.installation}

   ##${data.usage}
   ##lICENCE
   ${renderLicenseBadge(data.license)}
  
   
   ## Contributors
   ${data.contributing}
   
   ## Test Cases
   ${data.test}
   
  ## Git Hub UserName
  ${data.username}
   
  
  ## Email Address
  ${data.email}
  

  

`;
}

module.exports = generateMarkdown;
