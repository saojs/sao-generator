const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new generator (must be sao-*)',
        default: `sao-${this.outFolder.replace(/^sao-/, '')}`,
        filter: val => val.toLowerCase(),
        validate: val => val.startsWith('sao-')
      },
      {
        name: 'description',
        message: 'How would you describe the new template',
        default: `my ${superb()} SAO generator`
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
      transformExclude: 'template/**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        // If we use `package.json` directly
        // Then `template` folder will be treated as a package too, which isn't safe
        '_package.json': 'package.json'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
