// function to generate markdown for README
function generateMarkdown(data) { // need to call this to generate the markdown 
  return `
# Title
  ${data.title}

# Description
  ${data.decription}

# Table of content
  ${data.content}

# Installation guides
  ${data.installation}

# How to use the project
  ${data.usage}

# License
  ${data.license}

# How to contribute
  ${data.contribution}

# Testing
  ${data.testing}

# Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
