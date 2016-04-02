// listen to messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request)
    if (request.giveMe === 'user') {
        chrome.storage.sync.get('user', function(data) {
            console.log('returning user ' + JSON.stringify(data))
            sendResponse({user: data.user})
        })
        return true
    }
    return false
})
