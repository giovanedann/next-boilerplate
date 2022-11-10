module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'component generator',
    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      }
    ]
  })
}
