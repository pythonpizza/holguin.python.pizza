self.addEventListener('install', event => {
    navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
    });
});
