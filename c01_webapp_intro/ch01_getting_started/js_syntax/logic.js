(function(){
    'use strict'
    const c = 20
    if (c > 0 && c < 20){
        var a = 1
    } else if (c >= 20 && c < 40) {
        var a = 2
    } else {
        var a = 3
    }
    document.write('a = ', a)
})();