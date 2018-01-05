(function(){
    'use strict';
    var age = 16;
    var isFemale = true;
    var price = 0;
    if (age <= 15){
        price = 800;
    } else if (age >= 16 && isFemale){
        price = 1000;
    } else{
        price = 1800;
    }
    document.write('ticket price = ', price);
})();