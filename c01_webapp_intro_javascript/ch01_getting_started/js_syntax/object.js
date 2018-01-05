var counter = {
    number: 0,
    print: function(){
        counter.number++;
        console.log(counter.number);
    }

}
'use strict';
for (var i = 0; i < 10; i++) {
    counter.print();
}