var timerid = setInterval(function() { //Start a timer to continually check if 'session' class divs are loaded
    console.log($(".session"));
    if($(".session").length > 0)
    {
        $(".session").append(" hello world");
        clearInterval(timerid);
    }
}, 75);