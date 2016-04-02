$(function () { // run this function after the page is fully loaded
    function message(text) {
        $('#message').text(text)
    }

    // load the data
    chrome.storage.sync.get('user', function (data) {
        $('input').val(data.user)
    })

    $('button').click(function (e) {
        e.preventDefault() // don't redirect the form
        var user = $('input').val()
        if (user) {
            // save the username
            chrome.storage.sync.set({'user': user}, function () {
                message('saved')
            })
        } else {
            message('error: empty')
        }
    })
})
