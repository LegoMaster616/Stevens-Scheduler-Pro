
$.getJSON('https://iofel.me:3000/api/interested/', function (data) {
    var keys = [];
    
    for(var key in data){
        
        if(data[key] == "aafflitt")
            keys.push(key);
    }
    console.log(keys);
    $("#firstclass").val(keys[0]);
    $("#secondclass").val(keys[1]);
    $("#thirdclass").val(keys[2]);
    $("#fourthclass").val(keys[3]);
    $("#fifthclass").val(keys[4]);
    $("#sixthclass").val(keys[5]);
    $("#seventhclass").val(keys[6]);
    $("#eighthclass").val(keys[7]);
});