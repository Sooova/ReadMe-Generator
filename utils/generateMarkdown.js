
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// var collatedAnswers;
var answersArray = [];
let tableOfContents;
function generateMarkdown(res) {
  answersArray.push('# ' + res.title);
  answersArray.push('## Description ');
  answersArray.push(res.description);
  answersArray.push('## Table of Contents ');
  tableofContents = (`[Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`);
  answersArray.push(tableofContents);
  answersArray.push('## Installation ');
  answersArray.push(res.install);   
  answersArray.push('## Usage ');
  answersArray.push(res.usage);
  answersArray.push('## Contribution ')
  answersArray.push(res.contribution);
  answersArray.push('## Testing ');
  answersArray.push(res.testing);
  collatedAnswers = answersArray.join('\n');
  return collatedAnswers;
}

module.exports = generateMarkdown;
