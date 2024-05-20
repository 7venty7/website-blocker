let button = document.getElementById("submit");
var url_list = [];

button.addEventListener('click', () => {
    var url = document.getElementById("url-list").value.toString().toLowerCase();

    url_list = url.replace(/\s+/g, '').split(",");
    url_list.forEach((url) => console.log(url));
});

setInterval(() => {
    var cur = window.location.href;
    if (url_list.length > 0) {
        url_list.forEach((url) => {
            if (url == cur) {
                console.log("blocked");
                window.location.replace("https://tenor.com/en-GB/view/linus-lost-crying-smoke-fog-gif-9298551");
            }
        })
    }
})
