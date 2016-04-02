chrome.runtime.sendMessage({giveMe: 'user'}, function(response) {
    var user = response.user
    setInterval(function() { //Start a timer to continually check if 'session' class divs are loaded
        var divs = $('.session')
        for (let i=0; i<divs.length; ++i) {
            let curDiv = divs[i]
            if ($(curDiv).text()[0] != '*') { // update
                let title = divs[i].title
                let classid = title.substring(title.length-5, title.length)
                console.log('updating ' + classid)
                $.getJSON('https://iofel.me:3000/api/interested/' + classid, function (data) {
                    $(curDiv).prepend("<b>* " + data.count + " students are interested *</b><br>")
                })
            }
        }
    }, 100);
})


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
