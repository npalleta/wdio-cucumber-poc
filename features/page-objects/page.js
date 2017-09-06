class Page {
    constructor() {
        this.title = 'My Page';
    }

    openUrl() {
        return browser.url('https://tghcastro.lojaintegrada.com.br/');
    }

    openPath(path) {
        return browser.url('https://tghcastro.lojaintegrada.com.br/' + path);
    }

    handling() {
        return browser.windowHandle();
    }
}

module.exports = new Page();