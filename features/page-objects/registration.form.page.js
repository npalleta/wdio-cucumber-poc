// registration.form.page.js

var Page = require('./page');
var Register = require('../../utils/register');

var aIdentifyingLinkByXpath = '//*[@id="cabecalho"]/div[2]/div[1]/div[2]/div[1]/div[1]/a';
var btnSubmitByXpath = '//*[@id="corpo"]/div/div[1]/div[2]/div[2]/div/form/fieldset/div/button';
var legAccessInfoByXpath = '//*[@id="formCadastroCompleto"]/form/div[1]/div/div/fieldset/legend';
var btnConfirmRegisterByAttr = ".botao.principal[type='submit']";
var optStateBySelector = '#id_estado > option:nth-child(25)';
var btnAddressFillAlertBySelector = '#modalAlerta > div.modal-footer > a';
var msgAccountConfirmBySelector = '#corpo > div > div.alert.alert-success.alert-geral';

var RegistrationFormPage = {};

var _page_ = {

    getIdentifyingLink:    () => browser.element(aIdentifyingLinkByXpath),
    getEmailLogin:         () => browser.element('#id_email.span8'),
    getSubmitButton:       () => browser.element(btnSubmitByXpath),
    //
    getAccessInfo:         () => browser.element(legAccessInfoByXpath),
    getEmailConfirm:       () => browser.element('#id_confirmacao_email'),
    getPasswordConfirm:    () => browser.element('#id_confirmacao_senha'),
    //
    getIndividual:         () => browser.element('#id_tipo_0'),
    getLegalPerson:        () => browser.element('#id_tipo_1'),
    //
    getFullName:           () => browser.element('#id_nome'),
    getCpf:                () => browser.element('#id_cpf'),
    getCellphoneNumber:    () => browser.element('#id_telefone_celular'),
    getPhoneNumber:        () => browser.element('#id_telefone_principal'),
    getSexualGender:       () => browser.element('#id_sexo'),
    getBirthDate:          () => browser.element('#id_data_nascimento'),
    //
    getZipCode:            () => browser.element('#id_cep'),
    getAddress:            () => browser.element('#id_endereco'),
    getAddressNumber:      () => browser.element('#id_numero'),
    getComplement:         () => browser.element('#id_complemento'),
    getReference:          () => browser.element('#id_referencia'),
    getDistrict:           () => browser.element('#id_bairro'),
    getCity:               () => browser.element('#id_cidade'),
    getState:              () => browser.element('#id_estado > option:nth-child(25)'),
    //
    getRegister:           () => browser.element(btnConfirmRegisterByAttr),
    //
    getAddressFillAlert:   () => browser.element(btnAddressFillAlertBySelector),
    //
    getMessageConfirm:     () => browser.element(msgAccountConfirmBySelector),
    
    openUrl: () => {
        Page.openUrl.call(this);
    },

    handle: () => {
        Page.handling.call(this);
    },

    closeAddressFillFormAlert: function(timeInMillis) {
        this.getAddressFillAlert().waitForVisible(timeInMillis);
        this.getAddressFillAlert().click();
    }
};

var _register_ = {
    
    generateCpf: () => {
        return Register.getCpf.call(this);
    }
};

// Utilizando o Object() Object.assign para fins de estudo.
RegistrationFormPage = Object.assign(RegistrationFormPage, _page_, _register_);

module.exports = RegistrationFormPage;