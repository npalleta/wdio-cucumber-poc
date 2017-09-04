var {defineSupportCode} = require('cucumber');

var expect = require('chai').expect;

var LoginPage = require('../../pages/login.page');

global.syncAsync = {};

defineSupportCode(function ({Given, When, Then}) {
    Given('I go on the login page', function () {
        LoginPage.openPath();
    });

    When('I fill in the user with {stringInDoubleQuotes}', function (emailLogin) {
        LoginPage.emailLogin.setValue(emailLogin);
    });

    When('Fill in the password with {stringInDoubleQuotes}', function (password) {
        LoginPage.password.setValue(password);
    });

    When('I click the submit button', function () {
        LoginPage.submitButton.click();
    });

    Then('User Data Screen should display the username {stringInDoubleQuotes}', function (loginInfo) {
        browser.windowHandle();
        expect(LoginPage.loginName.getText()).to.contain(loginInfo);
    });
});