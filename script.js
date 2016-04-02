$(function () { // run this function after the page is fully loaded
    function message(text) {
        $('#message').text(text)
    }

    // load the data
    chrome.storage.sync.get('user', function (data) {
        $('input').val(data.user)
    })

    $('#loginbutton').click(function (e) {
        e.preventDefault() // don't redirect the form
        var user = $('input').val()
        if (user) {
            // save the username
            chrome.storage.sync.set({'user': user}, function () {
                message('Saved!')
            })
        } else {
            message('error: empty')
        }
    })

    $('#transferbutton').click(function (e) {
        e.preventDefault() // don't redirect the form
        var user = $('input').val()
        if (user) {
            //upload classes
            chrome.storage.sync.set({'user': user}, function () {
                message('Uploaded!')
            })
        } else {
            message('error: empty')
        }
    })

    $('#tweetbutton').click(function(e) {
        chrome.tabs.query({url: '*://web.stevens.edu/scheduler*'}, function(tabs) {
            for (var i=0; i<tabs.length; ++i) {
                if (tabs[i].url) {
                    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Check out my schedule!\n" + tabs[i].url)
                    console.log(url)
                    chrome.tabs.create({ url: url })
                }
            }
        })
    })
})
