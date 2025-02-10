import inquirer from 'inquirer';
import fs from 'fs';

const generateHTML = ({ title, usage, github, license }) =>

`# ${title}

## Description

What was your motivation? - My motivation for creating a README generator was to show the process of creating a clear example for projects.
Why did you build this project? - I built this project to make it easier for developers to quickly generate professional and well-structured README files.
What problem does it solve? - This project solves the problem of creating consistent, high-quality README files quickly and easily.
What did you learn? - I learned how important it is for effective communication within a development team

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credits)
- [License](#license)

## Installation

1. Clone the repository: https://github.com/NovaJ162/Hey-README
2. Install Node.JS, the latest version should be installed.
3. Open the cloned repository in a source code editor (For example: Visual Studio Code).
4. Open the intergrated terminal on index.js in order to run "npm i" on the command line to ensure that "node-modules" and "package.json" are operating on your local device.

## Usage
# ${usage}

## Github
# ${github}

## Credits

- https://youtu.be/_HxQkorZbcI?si=wO8yDflL0f3ulj7S
- https://youtu.be/9iVQFaRaNV8?si=ire1Ftu96o78ps8Y
- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

## License

Mozilla Public License Version 2.0
` 


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Why are you making this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the link to your Github?',
    }
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
