// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.badge}
  > ${data.description}
  ### Table of Contents
  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions
  ### Installation
  > ${data.installation}
  ### Usage
  > ${data.usage}
  ### License
  > ${data.license}
  ### Contributing
  > ${data.contributions}
  ### Tests
  > ${data.test}
  ### Questions
  [${gitHub}](https://github.com/${gitHub})
  ${data.email}
  > ${data.questions}
`;
}

module.exports = generateMarkdown;
