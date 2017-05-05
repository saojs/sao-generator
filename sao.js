const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new template (better be template-*)?',
      default: ':folderName:',
      filter: val => val.toLowerCase()
    },
    description: {
      message: 'How would you descripe the new template?',
      default: `my ${superb()} SAO template`
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      filter: val => val.toLowerCase(),
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    }
  },
  skipInterpolation: [
    'template/**'
  ],
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: true
}
