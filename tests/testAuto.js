const credentials = require('../data.js');
const configs = require('../configs.js');

module.exports = {
    'Test': function (client) {
        const login = client.page.loginPage();
        const errorMessage = 'Автомобиль не прошел проверку';

        login.navigate()
            .setValue('@login', credentials.login)
            .setValue('@password', credentials.password)
            .click('@submitbtn');

        const auto = client.page.mainPage().section.auto;

        auto
            .waitForElementVisible(auto.selector, configs.waitElementTime)
            .setValue('@vin', credentials.vin)
            .waitForElementVisible('@techPart',configs.waitElementTime)
            .assert.visible('@techPart')
            .setValue('@carMark', credentials.mark)
            .click('@markedItem')
            .setValue('@carModel', credentials.model)
            .click('@markedItem')
            .setValue('@carYear', credentials.year)
            .click('@markedItem')
            .setValue('@power', credentials.power)
            .setValue('@series', credentials.series)
            .setValue('@numberPlate', credentials.number)
            .setValue('@issueDate', credentials.getDate)
            .waitForElementVisible('message',configs.waitElementTime)
            .assert.visible('message')
            .assert.containsText('message',errorMessage);

        client.end();
    }
};