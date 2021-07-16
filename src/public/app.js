(d => {
    const proxyEndpoint = 'http://161.35.209.255:3000/events';
    const data = {'test': true};

    const initListener = () => {
        const fetchButton = d.getElementById('fetch');
        const wbajButton = d.getElementById('wbaj');
        const wbtpButton = d.getElementById('wbtp');

        fetchButton.addEventListener('click', e => {
            fetch(proxyEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(() => {});
        });

        wbajButton.addEventListener('click', e => {
            navigator.sendBeacon(proxyEndpoint, new Blob([JSON.stringify(data)], { type: "application/json" }));
        });

        wbtpButton.addEventListener('click', e => {
            navigator.sendBeacon(proxyEndpoint, JSON.stringify(data));
        });
    }

    initListener();
})(document);
