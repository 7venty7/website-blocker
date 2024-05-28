let button = document.getElementById("submit");
var url_list = [];

if (localStorage.getItem("urls") !== null) {
    document.getElementById("url-list").value = localStorage.getItem("urls");
}

button.addEventListener('click', () => {
    var url = document.getElementById("url-list").value.toString().toLowerCase();

    localStorage.setItem("urls", url);

    chrome.storage.sync.set({"urls": url}, () => {
        console.log(url);
    });
});
