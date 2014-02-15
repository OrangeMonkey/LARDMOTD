var protips = [
    "Right click to throw your knife for an impressive long-range kill",
    "Don't eat the yellow snow"
];

window.onload = function() {
    var motd = document.getElementById("motd");
    motd.innerHTML = "Protip: " + protips[Math.floor(Math.random() * protips.length)];
};