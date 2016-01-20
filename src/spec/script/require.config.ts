(() => {
    requirejs.config({
        baseUrl: "",
        deps: [
            './spec/script/stationery/stationery.spec.js'
        ],
        callback: window.onload
    });
})();
