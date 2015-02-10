var fs   = require('fs');
var path = require('path');

UserController = function() {};

UserController.prototype.uploadFile = function(req, res) {
    // We are able to access req.files.file thanks to 
    // the multiparty middleware
    var file = req.files.file;

    fs.readFile(file.path, function (err, data) {
        if(err) {
            console.log(err);
        } else {
            var newPath =  path.join(__dirname, '../');
            fs.writeFile(newPath + 'sounds/' + file.name, data, function (err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(file.name + ' saved');
                }
            });
        }
    });
}




module.exports = new UserController();