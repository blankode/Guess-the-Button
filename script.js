function playEasyMode() {
    var winner = Math.floor(Math.random() * 3);
    ++winner;
    let content = document.getElementById("playSpace");
    var contentBackup = document.getElementById("playSpace");
    content.innerHTML = "<h1>Guess the Door - Easy Mode</h1>"
    console.log(contentBackup);
}