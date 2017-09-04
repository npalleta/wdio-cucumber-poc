class Page {
    constructor() {
        this.title = 'My Page';
    }

    openUrl() {
        browser.url('https://tghcastro.lojaintegrada.com.br/');
    }

    openPath(path) {
        return browser.url('https://tghcastro.lojaintegrada.com.br/' + path);
    }
}

module.exports = new Page();