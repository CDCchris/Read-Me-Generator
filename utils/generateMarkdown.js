// function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  ## Description
  ${answer.description}

  ## Contents
  ${answer.contents}

  ## Installation
  ${answer.installation}

  ## Usage
  ${answer.usage}

  ## License
  ${answer.license}

  ## Contributions
  ${answer.contribution}

  ## Tests
  ${answer.tests}

  ## Questions
  If you have any questions contact me here
  <${answer.questions}>
  You can see my Github here
  <${answer.github}>

`;
}

module.exports = generateMarkdown;


