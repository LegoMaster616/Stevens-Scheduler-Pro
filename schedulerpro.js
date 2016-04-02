
var timerid = setInterval(function() { //Start a timer to continually check if 'session' class divs are loaded
    if($($(".session")[0]).text().substr(0,1) != "*") //Adds to any "session" without asterisk
    {
        $(".session").prepend("<b>*hello world</b>: ");
    }
}, 50);


$(window).on('hashchange', function() {
    // URL changed
    var url = document.location.hash.split('=')[1]
    if (url) {
        var classes = url.split(',')
        // ask the extension for the user
        chrome.runtime.sendMessage({giveMe: 'user'}, function (response) {
            var user = response.user
            var api = 'https://iofel.me:3000/api/interested/' + user
            // talk to API
            $.ajax(api, { method: 'post', data: { classes: classes } })
        })
    }
})
