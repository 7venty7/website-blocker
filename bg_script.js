setInterval(() => {
    var cur = window.location.hostname;
    chrome.storage.sync.get(["urls", "enabled"], (items) => {
        var url_list = items.urls.replace(/\s+/g, '').split(",");

        var enabled = items.enabled;

        url_list.forEach((url) => {
            if (url.replace("www.", "") === cur.replace("www.", "") && enabled === "true") {
                console.log("blocked");
                window.location.replace("https://tenor.com/en-GB/view/linus-lost-crying-smoke-fog-gif-9298551");
            }
        })
    })
}, 1000)
