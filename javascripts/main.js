var messages = [
    "Protip: Right click to throw your knife for an impressive long-range kill"
];

var quoters = [
    "Georgy Zhukov",
    "Attila the Hun",
    "William the Conqueror",
    "Adolf Hitler",
    "Ghengis Khan",
    "Hannibal Barca",
    "Napoleon Bonaparte",
    "Julius Caesar",
    "Alexander the Great",
    "Cyrus the Great"
];

$(function() {
    var d = new Date();
    var n = Math.floor(d.getTime() / (1000 * 60 * 5));

    if (((n * 2243) % 5) > 0) {
        $.getJSON("http://www.reddit.com/r/nocontext/.json?limit=15", function(data) {
            $("#motd").html('"' + data.data.children[(n * 2609) % 10].data.title + '"');
            $("#quoter").html('~ ' + quoters[(n * 491) % quoters.length]);
            $("#quoter")[0].style.display = "block";
            $("#motdwrap")[0].style.color = "#828282";
        });
    } else {
        $("#motd").html(messages[(n * 1549) % messages.length]);
        $("#motdwrap")[0].style.color = "#828282";
    }
});
