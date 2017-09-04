// login.page.js

var Page = require('./page');

var btnSubmitByXpath = '//*[@id="corpo"]/div/div[1]/div[2]/div[1]/div/form/fieldset/div[2]/div/button';
var iLoginName = '//*[@id="corpo"]/div/div[2]/div[1]/div/span';

var LoginPage = Object.create(Page, {

    emailLogin:     { get: () => browser.element('#id_email') },
    password:       { get: () => browser.element('#id_senha') },
    submitButton:   { get: () => browser.element(btnSubmitByXpath) },
    loginName:      { get: () => browser.element(iLoginName) },

    openPath: { value: () => {
        Page.openPath.call(this, 'conta/login?next=/conta/index');
    } }
});

module.exports = LoginPage;