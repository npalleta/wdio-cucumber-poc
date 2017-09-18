class Page {

    constructor() {
        this.title = 'My Page';
    }

    openUrl() {
        return browser.url('/');
    }

    openPath(path) {
        return browser.url('/' + path);
    }

    handling() {
        return browser.windowHandle();
    }
}

module.exports = new Page();