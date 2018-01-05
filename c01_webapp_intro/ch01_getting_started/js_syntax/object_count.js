(function(){
    'use strict';
    var game = {
        startTime: null,
        display_area: document.getElementById('display_area'),
        start: function() {
            game.startTime = new Date().getTime();
            document.body.onkeypress = game.stop;
            console.log('started');
        },
        stop: function() {
            var stopTime = new Date().getTime();
            var seconds = (stopTime - game.startTime) / 1000;
            if (seconds < 10.5 && seconds > 9.5) {
                game.display_area.innerText = seconds + "sec. Great!";
            } else {
                game.display_area.innerText = seconds + "sec. nah..";
            }
        }
    };

    if (confirm('press any key after counting 10 seconds')){
        game.start();
    }
})();