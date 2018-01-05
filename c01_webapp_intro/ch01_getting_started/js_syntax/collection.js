var classes = ['red', 'blue', 'green'];
console.log(classes);
console.log(classes.length);

for (var i = 0; i < 3; i++){
    document.write(i, ' ', classes[i], '<br>');
}

classes.push('yellow');
document.write('<br>');

for (var i = 0; i < 4; i++){
    document.write(i, ' ', classes[i], '<br>');
}

classes.pop();
document.write('<br>');

for (var i = 0; i < 3; i++){
    document.write(i, ' ', classes[i], '<br>');
}

document.write('<br>');

agyo = ['a', 'i', 'u', 'e', 'o'];
kagyo = ['ka', 'ki', 'ku', 'ke', 'ko'];

(function name(){
    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            document.write('<p>' + agyo[i] + kagyo[j] + '</p>');
        }
        document.write('<br>');
    }
})();

name;