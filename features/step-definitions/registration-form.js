var {defineSupportCode} = require('cucumber');

var expect = require('chai').expect;

var LoginPage = require('../../pages/login.page');
var RegistrationFormPage = require('../../pages/registration.form.page');

global.syncAsync = {};

defineSupportCode(function ({Given, When, Then}) {
    Given('I go on the home page', function () {
        RegistrationFormPage.openUrl();
    });

    When('I access the identification link', function () {
        //
    });

    And('Fill the new user text box/ email text box with ""', function () {
        //
    });

    And('I click the registration button', function () {
        //
    });

    Then('Registration screen should be displayed', function () {
        //
    });

    And('Fill the new user text box/ email text box with ""', function () {
        //
    });

    And('Fill in the confirmation email text box with ""', function () {
        //
    });

    And('I fill in the email with ""', function () {
        //
    });

    And('Fill in the passwordConfirm text box with ""', function () {
        //
    });

    And('Fill in the password with ""', function () {
        //
    });

    And('I click the type of register button', function () {
        //
    });

    And('Fill in the full name text box with ""', function () {
        //
    });

    And('Fill in the cpf text box with ""', function () {
        //
    });

    And('Fill in the cell phone number text box with ""', function () {
        //
    });

    And('Fill in the phone number text box with ""', function () {
        //
    });

    And('I select the gender "" in the options', function () {
        //
    });

    And('Fill in the birth date text box with ""', function () {
        //
    });

    And('Fill in the zip code text box with ""', function () {
        //
    });
});