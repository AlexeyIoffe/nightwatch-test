const credentials = require('../data.js');

const loginCommands = {
    submit: function() {

        return this.api.url(credentials.url)
            .setValue('@login', credentials.login)
            .setValue('@password', credentials.password)
            .click('@submitbtn');
    }
};

module.exports = {
    commands: [loginCommands],
    url: credentials.url,
    elements: {
        login: {
            selector: '#login'
        },
        password: {
            selector: '#password',
        },
        submitbtn: {
            selector: '.ui.positive.right.button'
        }
    }
};