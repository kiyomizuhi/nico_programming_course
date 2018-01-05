(function(){
    'use strict';
    var myBirthTime = new Date(1983, 9, 23, 11, 54);
    function updateparagraph(){
        var now = new Date();
        var days = (now.getTime() - myBirthTime.getTime()) / (1000 * 60 * 60 * 24);
        document.getElementById('birth_time').innerText = "it's been " + days + " days"
    }
    setInterval(updateparagraph, 1000)
})();