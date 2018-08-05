var fs = require("fs");

fs.readFile('app/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

for (var i=0; i<1000000; i++) {
    console.log("console " + i);
}