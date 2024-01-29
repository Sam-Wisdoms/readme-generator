// function to generate markdown for README
function generateMarkdown(data) { // need to call this to generate the markdown 
  return `
[Title](#Title)
  ${data.title}

[Description](#Description)
  ${data.description}

[Table of content](#Table-of-content)
  ${data.content}

[Installation guides](#Installation-guides)
  ${data.installation}

[How to use the project](#How-to-use-the-project)
  ${data.usage}

[License](#License)
  ${data.license}

[How to contribute](#How-to-contribute)
  ${data.contribution}

[Testing](#Testing)
  ${data.testing}

## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
