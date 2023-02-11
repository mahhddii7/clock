const watch = document.querySelector('.watch')

function updateClock() {
    var now = new Date(); // current date
    let minutes = now.getMinutes();
    minutes < 10 ? minutes = '0' + minutes : minutes
    time = now.getHours() + ':' + minutes + `<sup>` + now.getSeconds() + `</sup>`; // again, you get the idea
    watch.innerHTML = time

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}

updateClock()