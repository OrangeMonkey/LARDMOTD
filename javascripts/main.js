var messages = [
    "Protip: Right click to throw your knife for an impressive long-range kill",
    "Protip: Shoot the heads",
    "Beepdy Boopdy Beepdy Boop",
    "Stick together team"
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
    "Cyrus the Great",
    "Sun Tzu",
    "Leonidas",
    "Pericles",
    "Hannibal",
    "Spartacus",
    "Tiberius",
    "Hadrian",
    "Marcus Aurelius",
    "Constantine the Great",
    "Macbeth",
    "Saladin",
    "William Wallace",
    "Henry V",
    "Joan of Arc",
    "Francisco Pizarro",
    "Hernán Cortés",
    "Cuauhtémoc",
    "Oda Nobunaga",
    "Oliver Cromwell",
    "Louis XIV",
    "Peter the Great",
    "George Washington",
    "John Paul Jones",
    "Miguel Hidalgo y Costilla",
    "Francisco de Paula Santander",
    "Ulysses S. Grant",
    "Theodore Roosevelt",
    "Dwight D. Eisenhower",
    "Mao Zedong",
    "Fidel Castro",
    "Che Guevara"
];

function formatQuote(quote) {
    var matches = quote.match(/(".+")|('.+')/g);

    if (matches != null) {
        quote = matches[0].substring(1, matches[0].length - 1);
    }

    return '"' + quote + '"';
}

$(function() {
    var d = new Date();
    var t = d.getTime() + d.getTimezoneOffset() * 60000;
    var n = Math.floor(t / (1000 * 60 * 5.972));

    if (((n % 2243) % 5) > 0) {
        var limit = 20;

        $.getJSON("http://www.reddit.com/r/nocontext/top.json?limit=" + toString(limit), function(data) {
            $("#motd").html(formatQuote(data.data.children[(n % 2609) % limit].data.title));
            $("#quoter").html('~ ' + quoters[(n % 491) % quoters.length]);
            $("#quoter")[0].style.display = "block";
            $("#motdwrap")[0].style.color = "#828282";
        });
    } else {
        $("#motd").html(messages[(n % 1549) % messages.length]);
        $("#motdwrap")[0].style.color = "#828282";
    }
});
