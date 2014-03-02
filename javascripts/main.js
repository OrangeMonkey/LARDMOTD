var protips = [
    "Right click to throw your knife for an impressive long-range kill",
    "Shoot the heads",
    "Press the W key to move forwards",
    "Right click to look down iron sights",
    "Disable your crosshair so it doesn't get in the way",
    "Type 'unbind all' in the console to unlock extra weapons",
    "Test if friendly fire is enabled by headshotting each team-mate multiple times"
];

var quotes = [    
    "Beepdy Boopdy Beepdy Boop",
    "Stick together team!",
    "Do you want to build a snowman?",
    "Every round is a Zeus fight",
    "Dota 2 is crap",
    "Is Alex fucking Medaphydis?",
    "GOD DAMNIT FIRE!",
    "Lizards..? Are you fucking seriousy",
    "Can you be a bit more pacific?",
    "Why is there no German-Flag?"
];

var gifs = [    
    "http://i.imgur.com/3BX3W3W.jpg",
    "http://img.pandawhale.com/post-12543-Bizarre-Giraffe-Dance-gif-GWuz.gif",
    "http://media.tumblr.com/1d8529cead8cdd1b9b472bae1b025d65/tumblr_inline_mjycwttt5f1qz4rgp.gif",
    "http://i.imgur.com/2kQcifM.gif",
    "http://i.imgur.com/oyPFqcv.gif",
    "http://i.imgur.com/hFTsIq3.gif",
    "http://puu.sh/70WQm.gif",
    "http://i.imgur.com/F26H5.gif",
    "http://31.media.tumblr.com/tumblr_ldlpeoz2p31qemhrqo1_250.gif",
    "http://static.naamapalmu.com/files/mu/big/kdpkquxl.gif",
    "http://i.imgur.com/Flmbxha.gif",
    "http://i.imgur.com/PXBIiXP.gif?1?3395",
    "http://i.imgur.com/NhafFQA.gif",
    "http://i.imgur.com/Obyhvw2.gif"
];

var vids = [/*
    "_X6VoFBCE9k",
    "gvdf5n-zI14",
    "rdo7qvLEHog",
    "MbtlghVYHjQ",
    "CjhrIsSCcjs",
    "CJ0C28d6oWY",
    "jPb4oryoRMw",
    "NuvuIO23vRg",
    "9HxlrXPSnjA",
    "lqYqyHBTZjg",
    "L1BDM1oBRJ8"
*/];

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

    return quote;
}

function setMOTD(message) {
    $("#motd").html(message);
    $("#motdwrap")[0].style.color = "#828282";
}

function setQuote(message, n) {
    $("#motd").html('"' + message + '"');
    $("#quoter").html('~ ' + quoters[(n % 491) % quoters.length]);
    $("#quoter")[0].style.display = "block";
    $("#motdwrap")[0].style.color = "#828282";
}

$(function() {
    $.getJSON("http://time.jsontest.com/", function(tzdata) {
        var noContextLimit = 20;
        var count = protips.length + quotes.length + gifs.length + vids.length + noContextLimit;
        var n = Math.floor(tzdata.milliseconds_since_epoch / (15 * 60 * 1000));

        var i = (n * 5153) % count;

        if (i < protips.length) {
            setMOTD("Protip: " + protips[i]);
            return;
        }

        i -= protips.length;
        if (i < quotes.length) {
            setQuote(quotes[i], n);
            return;
        }

        i -= quotes.length;
        if (i < gifs.length) {
            setMOTD('<img src="' + gifs[i] + '" />');
            return;
        }

        i -= gifs.length;
        if (i < vids.length) {
            setMOTD('<iframe width="420" height="315" src="http://www.youtube.com/embed/' + vids[i] + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
            return;
        }

        i -= vids.length;
        $.getJSON("http://www.reddit.com/r/nocontext/top.json?limit=" + toString(noContextLimit), function(data) {
            setQuote(formatQuote(data.data.children[i].data.title), n);
        });
    });    
});
