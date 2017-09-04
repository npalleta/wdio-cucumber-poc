function Page () {
    this.title = 'My Page';
}

Page.prototype.openUrl = function () {
    browser.url('https://tghcastro.lojaintegrada.com.br/');
};

Page.prototype.openPath = function (path) {
    browser.url('https://tghcastro.lojaintegrada.com.br/' + path);
};

module.exports = new Page();