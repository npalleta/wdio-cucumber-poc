var {defineSupportCode} = require('cucumber');

var expect = require('chai').expect;

var LoginPage = require('../page-objects/login.page');

global.syncAsync = {};

defineSupportCode(function ({Given, When, Then}) {
    Given('I go on the login page', () => {
        LoginPage.openPath();
    });

    When('I fill in the user with {stringInDoubleQuotes}', (emailLogin) => {
        LoginPage.emailLogin.setValue(emailLogin);
    });

    When('Fill in the password with {stringInDoubleQuotes}', (password) => {
        LoginPage.password.setValue(password);
    });

    When('I click the submit button', () => {
        LoginPage.submitButton.click();
    });

    Then('User Data Screen should display the username {stringInDoubleQuotes}', (loginInfo) => {
        browser.windowHandle();
        expect(LoginPage.loginName.getText()).to.contain(loginInfo);
    });
});