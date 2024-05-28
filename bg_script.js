setInterval(() => {
    var cur = window.location.hostname;
    chrome.storage.sync.get(["urls"], (items) => {
        const url_list = items.urls.replace(/\s+/g, '').split(",");
        url_list.forEach((url) => console.log(url));

        url_list.forEach((url) => {
            if (url === cur) {
                console.log("blocked");
                window.location.replace("https://tenor.com/en-GB/view/linus-lost-crying-smoke-fog-gif-9298551");
            }
        })
    })
}, 1000)
