// registration.form.page.js

var Page = require('./page');

var aIdentifyingLink = '//*[@id="cabecalho"]/div[2]/div[1]/div[2]/div[1]/div[1]/a';
var btnSubmitByXpath = '//*[@id="corpo"]/div/div[1]/div[2]/div[2]/div/form/fieldset/div/button';
var btnConfirmRegisterByXpath = '/*[@id="formCadastroCompleto"]/form/div[4]/div/button';

var RegistrationFormPage = Object.create(Page, {

    identifyingLink: { get: function () { return browser.element(aIdentifyingLink); } },
    emailLogin:      { get: function () { return browser.element('#id_email.span'); } },
    submitButton:    { get: function () { return browser.element(btnSubmitByXpath); } },
    //
    emailConfirm:    { get: function () { return browser.element('#id_confirmacao_email'); } },
    passwordConfirm: { get: function () { return browser.element('#id_confirmacao_email'); } },
    //
    individual:      { get: function () { return browser.element('#id_tipo_0'); } },
    legalPerson:     { get: function () { return browser.element('#id_tipo_1'); } },
    //
    name:            { get: function () { return browser.element('#id_nome'); } },
    cpf:             { get: function () { return browser.element('#id_cpf'); } },
    cellphoneNumber: { get: function () { return browser.element('#id_telefone_celular'); } },
    phoneNumber:     { get: function () { return browser.element('#telefone_principal'); } },
    male:            { get: function () { return browser.selectByIndex('#id_sexo', 1); } },
    female:          { get: function () { return browser.selectByIndex('#id_sexo', 2); } },
    birthDate:       { get: function () { return browser.selectByIndex('#id_data_nascimento'); } },
    //
    zipCode:         { get: function () { return browser.element('#id_cep'); } },
    address:         { get: function () { return browser.element('#id_endereco'); } },
    addressNumber:   { get: function () { return browser.element('#id_numero'); } },
    reference:       { get: function () { return browser.element('#id_referencia'); } },
    district:        { get: function () { return browser.element('#id_bairro'); } },
    city:            { get: function () { return browser.element('#id_bairro'); } },
    state:           { get: function () { return browser.element('#id_estado'); } },
    //
    confirmRegister: { get: function () { return browser.element(btnConfirmRegisterByXpath); } },

    openUrl: { value: function() {
        Page.openUrl.call(this);
    } }
});

module.exports = RegistrationFormPage;