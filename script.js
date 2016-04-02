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
            // save the username
            chrome.storage.sync.set({'user': user}, function () {
                message('Uploaded!')
            })
        } else {
            message('error: empty')
        }
    })
})
