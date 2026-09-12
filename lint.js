const eslint = require('eslint');
const cli = new eslint.ESLint({
    overrideConfig: {
        env: { browser: true, es2021: true },
        parserOptions: { ecmaVersion: 12, sourceType: 'module', ecmaFeatures: { jsx: true } }
    }
});
cli.lintFiles(['src/**/*.jsx', 'src/**/*.js']).then(results => {
    cli.loadFormatter('stylish').then(formatter => {
        console.log(formatter.format(results));
    });
}).catch(e => console.error(e));
