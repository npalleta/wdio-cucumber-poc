// stepdefinitions.js
var {defineSupportCode} = require('cucumber');

var expect = require('chai').expect;

global.syncAsync = {};

defineSupportCode(function ({Given, When, Then}) {
    Given('I go to the website {stringInDoubleQuotes}', (url) => {
        return browser.url(url);
    });

    Then('I expect the title of the page {stringInDoubleQuotes}', (title) => {
        expect(browser.getTitle()).to.be.eql(title);
    });
});