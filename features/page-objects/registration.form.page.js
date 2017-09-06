// registration.form.page.js

var Page = require('./page');

var aIdentifyingLinkByXpath = '//*[@id="cabecalho"]/div[2]/div[1]/div[2]/div[1]/div[1]/a';
var btnSubmitByXpath = '//*[@id="corpo"]/div/div[1]/div[2]/div[2]/div/form/fieldset/div/button';
var legAccessInfoByXpath = '//*[@id="formCadastroCompleto"]/form/div[1]/div/div/fieldset/legend';
var btnConfirmRegisterByAttr = ".botao.principal[type='submit']";
var optStateBySelector = '#id_estado > option:nth-child(25)';
var btnAddressFillAlertBySelector = '#modalAlerta > div.modal-footer > a';
var msgAccountConfirmBySelector = '#corpo > div > div.alert.alert-success.alert-geral';

var RegistrationFormPage = Object.create(Page, {

    identifyingLink:  { get: () => browser.element(aIdentifyingLinkByXpath) },
    emailLogin:       { get: () => browser.element('#id_email.span8') },
    submitButton:     { get: () => browser.element(btnSubmitByXpath) },
    //
    accessInfo:       { get: () => browser.element(legAccessInfoByXpath) },
    emailConfirm:     { get: () => browser.element('#id_confirmacao_email') },
    passwordConfirm:  { get: () => browser.element('#id_confirmacao_senha') },
    //
    individual:       { get: () => browser.element('#id_tipo_0') },
    legalPerson:      { get: () => browser.element('#id_tipo_1') },
    //
    fullName:         { get: () => browser.element('#id_nome') },
    cpf:              { get: () => browser.element('#id_cpf') },
    cellphoneNumber:  { get: () => browser.element('#id_telefone_celular') },
    phoneNumber:      { get: () => browser.element('#id_telefone_principal') },
    sexualGender:     { get: () => browser.element('#id_sexo') },
    birthDate:        { get: () => browser.element('#id_data_nascimento') },
    //
    zipCode:          { get: () => browser.element('#id_cep') },
    address:          { get: () => browser.element('#id_endereco') },
    addressNumber:    { get: () => browser.element('#id_numero') },
    complement:       { get: () => browser.element('#id_complemento') },
    reference:        { get: () => browser.element('#id_referencia') },
    district:         { get: () => browser.element('#id_bairro') },
    city:             { get: () => browser.element('#id_cidade') },
    state:            { get: () => browser.element('#id_estado > option:nth-child(25)') },
    //
    register:         { get: () => browser.element(btnConfirmRegisterByAttr) },
    //
    addressFillAlert: { get: () => browser.element(btnAddressFillAlertBySelector) },
    //
    messageConfirm:   { get: () => browser.element(msgAccountConfirmBySelector) },
    
    openUrl: { value: () => {
        Page.openUrl.call(this);
    } },

    handle: { value: () => {
        Page.handling.call(this)
    } },

    closeAddressFillFormAlert: { value: function(timeInMillis) {
        this.addressFillAlert.waitForVisible(timeInMillis);
        this.addressFillAlert.click();
    } },
});

module.exports = RegistrationFormPage;