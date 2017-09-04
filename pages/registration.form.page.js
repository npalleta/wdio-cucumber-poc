// registration.form.page.js

var Page = require('./page');

var aIdentifyingLink = '//*[@id="cabecalho"]/div[2]/div[1]/div[2]/div[1]/div[1]/a';
var btnSubmitByXpath = '//*[@id="corpo"]/div/div[1]/div[2]/div[2]/div/form/fieldset/div/button';
var btnConfirmRegisterByXpath = '//*[@id="formCadastroCompleto"]/form/div[4]/div/button';
var legAccessInfoByXpath = '//*[@id="formCadastroCompleto"]/form/div[1]/div/div/fieldset/legend';

var RegistrationFormPage = Object.create(Page, {

    identifyingLink: { get: () => browser.element(aIdentifyingLink) },
    emailLogin:      { get: () => browser.element('#id_email.span8') },
    submitButton:    { get: () => browser.element(btnSubmitByXpath) },
    //
    accessInfo:      { get: () => browser.element(legAccessInfoByXpath) },
    emailConfirm:    { get: () => browser.element('#id_confirmacao_email') },
    passwordConfirm: { get: () => browser.element('#id_confirmacao_senha') },
    //
    individual:      { get: () => browser.element('#id_tipo_0') },
    legalPerson:     { get: () => browser.element('#id_tipo_1') },
    //
    fullName:        { get: () => browser.element('#id_nome') },
    cpf:             { get: () => browser.element('#id_cpf') },
    cellphoneNumber: { get: () => browser.element('#id_telefone_celular') },
    phoneNumber:     { get: () => browser.element('#telefone_principal') },
    male:            { get: () => browser.selectByIndex('#id_sexo', 1) },
    female:          { get: () => browser.selectByIndex('#id_sexo', 2) },
    birthDate:       { get: () => browser.selectByIndex('#id_data_nascimento') },
    //
    zipCode:         { get: () => browser.element('#id_cep') },
    address:         { get: () => browser.element('#id_endereco') },
    addressNumber:   { get: () => browser.element('#id_numero') },
    reference:       { get: () => browser.element('#id_referencia') },
    district:        { get: () => browser.element('#id_bairro') },
    city:            { get: () => browser.element('#id_bairro') },
    state:           { get: () => browser.element('#id_estado') },
    //
    confirmRegister: { get: () => browser.element(btnConfirmRegisterByXpath) },

    openUrl: { value: () => {
        Page.openUrl.call(this);
    } }
});

module.exports = RegistrationFormPage;