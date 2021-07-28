
var answersArray = [];
function generateMarkdown(res) {
  if (res.license == 'No License') {
    answersArray.push('');
  }
  else {
    let badge = `![](https://img.shields.io/badge/license-${res.license.replace(/ /g, "%20")}-blue?style=flat-square)`;
    answersArray.push(badge);
  }

  answersArray.push('# ' + res.title);
  answersArray.push('## Description ');
  answersArray.push(res.description);
  answersArray.push('## Table of Contents ');
  tableofContents = (`* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`);
  answersArray.push(tableofContents);
  answersArray.push('## Installation ');
  answersArray.push(res.install);   
  answersArray.push('## Usage ');
  answersArray.push(res.usage);
  answersArray.push('## Contribution ')
  answersArray.push(res.contribution);
  answersArray.push('## Testing ');
  answersArray.push(res.testing);
  answersArray.push('## Github');
  answersArray.push(`Github username: ` + '['+res.github+'](https://github.com/'+res.github+')');
  answersArray.push('## E-mail');
  answersArray.push(` if you would like to contact me regarding this repository, please e-mail me on: \n ` + res.email);
  answersArray.push(`## License `); 
  if (res.license == 'No License') {
    answersArray.push('Please Enter License Information Here');
  }
  else {
    answersArray.push(`This repository is protected by the: ` + res.license + ` agreement. For further information, please contact me.`);

  }
  collatedAnswers = answersArray.join('\n');
  return collatedAnswers;
}

module.exports = generateMarkdown;
