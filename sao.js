const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new template?',
      role: 'folder:name'
    },
    description: {
      message: 'How would you descripe the new template?',
      default: `my ${superb()} SAO template`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name'
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email'
    }
  },
  skipInterpolation: [
    'template/**'
  ]
}
