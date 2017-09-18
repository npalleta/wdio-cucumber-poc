var {defineSupportCode} = require('cucumber');

var expect = require('unexpected');
var Chance = require('chance');

var LoginPage = require('../page-objects/login.page');
var RegistrationFormPage = require('../page-objects/registration.form.page');

global.syncAsync = {};

var chance = new Chance();

defineSupportCode(function ({Given, When, Then}) {
    Given('I go on the home page', () => {
        RegistrationFormPage.openUrl();
    });

    When('I access the identification link', () => {
        RegistrationFormPage.getIdentifyingLink().click();
    });

    When('Fill the new user text box/ email text box with email generator', () => {
        RegistrationFormPage.getEmailLogin().setValue(chance.email());
    });

    When('I click the registration button', () => {
        RegistrationFormPage.getSubmitButton().click();
    });

    Then('Registration screen should be displayed', () => {
        RegistrationFormPage.handle();
        expect({ text: 'Dados para acesso' }, 'to equal', { text: RegistrationFormPage.getAccessInfo().getText() });
    }); 

    Then('I check if it is an email text box is pre-populated', () => {
        expect(LoginPage.emailLogin.getValue(), 'not to be empty');
    });

    When('Fill in the confirmation email text box with the same registration email', () => {
        RegistrationFormPage.getEmailConfirm().setValue(LoginPage.emailLogin.getValue());
    });

    Then('The email text box completion must be the same as confirmation email text box', () => {
        expect({ text: RegistrationFormPage.getEmailConfirm().getValue() }, 'to equal', { text: LoginPage.emailLogin.getValue() });
    });

    When('Fill in the password text box with {stringInDoubleQuotes}', (password) => {
        LoginPage.password.setValue(password);
    });

    When('Fill in the confirmation password text box with {stringInDoubleQuotes}', (passwordConfirm) => {
        RegistrationFormPage.getPasswordConfirm().setValue(passwordConfirm);
    });

    When('I click the type of register button : Type Individual', () => {
        RegistrationFormPage.getIndividual().click();
    });

    When('Fill in the full name text box with {stringInDoubleQuotes}', (fullName) => {
        RegistrationFormPage.getFullName().setValue(fullName);
    });

    When('Fill in the cpf text box with cpf generator', () => {
        // Esse trecho não funciona, o código gera um CPF inválido.
        // Foi adicionado ao projeto o Chance.js.
        // RegistrationFormPage.getCpf().setValue(RegistrationFormPage.generateCpf());
        RegistrationFormPage.getCpf().setValue(chance.cpf());
    });

    When('Fill in the cell phone number text box with {stringInDoubleQuotes}', (cellphoneNumber) => {
        RegistrationFormPage.getCellphoneNumber().setValue(cellphoneNumber);
    });

    When('Fill in the phone number text box with {stringInDoubleQuotes}', (phoneNumber) => {
        RegistrationFormPage.getPhoneNumber().setValue(phoneNumber);
    });

    When('I select the male gender in the options', () => {
        RegistrationFormPage.getSexualGender().selectByIndex(1);
    });

    When('Fill in the birth date text box with {stringInDoubleQuotes}', (birthDate) => {
        RegistrationFormPage.getBirthDate().setValue(birthDate);
    });

    When('Fill in the zip code text box with {stringInDoubleQuotes}', (zipCode) => {
        RegistrationFormPage.getZipCode().addValue(zipCode);
     });

    When('I close the address popup alert popup', () => {
        RegistrationFormPage.closeAddressFillFormAlert(15000);
    });

    When('Fill in the address text box with {stringInDoubleQuotes}', (address) => {
        RegistrationFormPage.getAddress().setValue(address);
    });

    When('Fill in the address number text box with {stringInDoubleQuotes}', (addressNumber) => {
        RegistrationFormPage.getAddressNumber().setValue(addressNumber);
    });

    When('Fill in the complement text box with {stringInDoubleQuotes}', (complement) => {
        RegistrationFormPage.getComplement().setValue(complement);
    });

    When('Fill in the reference text box with {stringInDoubleQuotes}', (reference) => {
        RegistrationFormPage.getReference().setValue(reference);
    });

    Then('I check if the district text box was filled', () => {
        RegistrationFormPage.getDistrict().waitForValue(5000);
        expect('Brooklin Paulista', 'to be', RegistrationFormPage.getDistrict().getValue());
    });

    Then('I check if the city text box was filled', () => {
        expect('São Paulo', 'to be', RegistrationFormPage.getCity().getValue());
    });

    Then('I check the state text box was filled', () => {
        expect('SP', 'to be', RegistrationFormPage.getState().getValue());
        expect('São Paulo', 'to be', RegistrationFormPage.getState().getText());
    });

    When('I click the create account button', () => {
        RegistrationFormPage.getRegister().click();
    });

    Then('Account confirmation message created should be displayed', () => {
        RegistrationFormPage.handle();
        RegistrationFormPage.getMessageConfirm().waitForVisible(5000);
        expect('x\Cliente criado com sucesso.', 'to contain', RegistrationFormPage.getMessageConfirm().getText());
        return browser.end();
    });
});