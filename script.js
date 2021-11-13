function playEasyMode() {
    var winner = Math.floor(Math.random() * 3);
    ++winner;
    const intro = document.getElementById("introduction");
    intro.style.display = 'none';
    let play = document.getElementById("playSpace");
    play.innerHTML = `<h1>Guess the Door - Easy Mode</h1><br>`;
    for (var i = 1; i <= 3; ++i) {
        play.innerHTML += `&nbsp&nbsp<button type="button" 
        class="btn button-bg btn-lg position-relative" onclick="checkWinner(`+ i +`,`+ winner +`)" id="`+ i +`">
        <i class="bi bi-door-closed"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ i +`</span>
    </button>&nbsp&nbsp`;
    }
}

function checkWinner(id, winner) {
    if (id === winner) {
        let door = document.getElementById(id);
        door.innerHTML = `<i class="bi bi-door-open"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ id +`</span>`;
        door.classList.replace("button-bg", "button-bg-winner");
        door.disabled = true;
        alert("Congratulations! You have found that door " + id + " is the right one!");
    } else {
        let door = document.getElementById(id);
        door.innerHTML = `<i class="bi bi-door-open"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark">`+ id +`</span>`;
        door.classList.replace("button-bg", "button-bg-wrong");
        door.disabled = true;
    }
}