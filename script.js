function showMessage() {
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");
    surprise.classList.add("show");
}

function heatwaveClick() {
    const button = document.getElementById('surpriseButton');
    button.classList.add('heatwave-active');
    button.disabled = true;
    setTimeout(() => {
        window.location.href = 'surprise.html';
    }, 300);
}