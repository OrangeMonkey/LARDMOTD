var messages = [
    "Protip: Right click to throw your knife for an impressive long-range kill",
    "Protip: Shoot the heads",
    "Protip: Press the W key to move forwards",
    "Protip: Right click to look down iron sights",
    "Protip: Disable your crosshair so it doesn't get in the way",
    "Protip: Type 'unbind all' in the console to unlock extra weapons",
    "Protip: Test if friendly fire is enabled by headshotting each team-mate multiple times",
    "Beepdy Boopdy Beepdy Boop",
    "Stick together team!",
    "Do you want to build a snowman?",
    "Every round is a Zeus fight",
    "Dota 2 is crap",
    '<img src="http://i.imgur.com/3BX3W3W.jpg" />',
    '<img src="http://img.pandawhale.com/post-12543-Bizarre-Giraffe-Dance-gif-GWuz.gif" />',
    '<img src="http://media.tumblr.com/1d8529cead8cdd1b9b472bae1b025d65/tumblr_inline_mjycwttt5f1qz4rgp.gif" />',
    '<img src="http://i.imgur.com/2kQcifM.gif" />'
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
    "Che Guevara",
    "Metapyziks",
    "The Orange Monkey",
    "Ivan Hoe",
    "Refresh Yourself",
    "Ukrainian Videogame Producer",
    "Stubenhocker"
];

function formatQuote(quote) {
    var matches = quote.match(/(".+")/g);

    if (matches != null) {
        quote = matches[0].substring(1, matches[0].length - 1);
    }

    return '"' + quote + '"';
}

$(function() {
    $.getJSON("http://time.jsontest.com/", function(tzdata) {
        var n = Math.floor(tzdata.milliseconds_since_epoch / (15 * 60 * 1000));

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
});
