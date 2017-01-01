const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new template (better be template-*)?',
      role: 'folder:name',
      filter: val => val.toLowerCase()
    },
    description: {
      message: 'How would you descripe the new template?',
      default: `my ${superb()} SAO template`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      filter: val => val.toLowerCase(),
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
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
  post({chalk, isNewFolder, folderName, log, install, init}) {
    // install modules
    install()
    // run git init
    init()
    if (isNewFolder) {
      log.success(`cd ${chalk.yellow(folderName)} to get started!`)
    } else {
      log.success('Done!')
    }
  }
}
