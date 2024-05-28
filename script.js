let button = document.getElementById("submit");
var url_list = [];

if (localStorage.getItem("enabled") === "true") {
    document.getElementById("toggle").click();
}

if (localStorage.getItem("urls") !== null) {
    document.getElementById("url-list").value = localStorage.getItem("urls");
}

button.addEventListener('click', () => {
    var enabled = document.getElementById("toggle").checked;
    var url = document.getElementById("url-list").value.toString().toLowerCase();

    var send_enable = enabled ? "true" : "false";

    localStorage.setItem("urls", url);
    localStorage.setItem("enabled", send_enable);

    chrome.storage.sync.set({"urls": url, "enabled": send_enable}, () => {
        console.log(url);
    });
});
