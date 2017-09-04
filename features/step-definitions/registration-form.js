var {defineSupportCode} = require('cucumber');

var expect = require('unexpected');

var LoginPage = require('../../pages/login.page');
var RegistrationFormPage = require('../../pages/registration.form.page');

global.syncAsync = {};

defineSupportCode(function ({Given, When, Then}) {
    Given('I go on the home page', () => {
        RegistrationFormPage.openUrl();
    });

    When('I access the identification link', () => {
        RegistrationFormPage.identifyingLink.click();
    });

    When('Fill the new user text box/ email text box with {stringInDoubleQuotes}', (emailLogin) => {
        RegistrationFormPage.emailLogin.setValue(emailLogin);
    });

    When('I click the registration button', () => {
        RegistrationFormPage.submitButton.click();
    });

    Then('Registration screen should be displayed', () => {
        browser.windowHandle();
        expect({ text: 'Dados para acesso' }, 'to equal', { text: RegistrationFormPage.accessInfo.getText() });
    }); 

    Then('I check if it is an email text box is pre-populated', () => {
        expect({ text: 'test@test.com' }, 'to equal', { text: LoginPage.emailLogin.getValue() });
    });

    When('Fill in the confirmation email text box with {stringInDoubleQuotes}', (emailConfirm) => {
        RegistrationFormPage.emailConfirm.setValue(emailConfirm);
    });

    When('Fill in the password text box with {stringInDoubleQuotes}', (password) => {
        LoginPage.password.setValue(password);
    });

    When('Fill in the confirmation password text box with {stringInDoubleQuotes}', (passwordConfirm) => {
        RegistrationFormPage.passwordConfirm.setValue(passwordConfirm);
    });

    /* When('I click the type of register button : Type Individual', () => {
        RegistrationFormPage.individual.click();
    });

    When('Fill in the full name text box with {stringInDoubleQuotes}', (fullName) => {
        RegistrationFormPage.fullName.setValue(fullName);
    });

    When('Fill in the cpf text box with {stringInDoubleQuotes}', (cpf) => {
        RegistrationFormPage.cpf.setValue(cpf);
    });

    When('Fill in the cell phone number text box with {stringInDoubleQuotes}', (cellphoneNumber) => {
        RegistrationFormPage.cellphoneNumber.setValue(cellphoneNumber);
    });

    When('Fill in the phone number text box with {stringInDoubleQuotes}', (phoneNumber) => {
        RegistrationFormPage.phoneNumber.setValue(phoneNumber);
    });

    When('I select the male gender in the options', () => {
        RegistrationFormPage.male.click();
    });

    When('Fill in the birth date text box with {stringInDoubleQuotes}', (birthDate) => {
        RegistrationFormPage.birthDate.setValue(birthDate)
    });

    When('Fill in the zip code text box with {stringInDoubleQuotes}', (zipCode) => {
        RegistrationFormPage.zipCode.setValue(zipCode);
     }); */
});