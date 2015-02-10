// lib/controllers/stream.js
var fs   = require('fs');
var path = require('path');



// Stream soundfile
exports.stream = function(req, res) {
  var filename = req.params.filename;
  var soundpath =  path.join(__dirname, '../');
  var filepath = soundpath + 'sounds/' + filename
  var stat = fs.statSync(filepath);
  var readStream = fs.createReadStream(filepath);
  
  fs.readFile(soundpath + 'sounds/' + filename, function (err, data) {
      if(err) {
        console.log(err);
      } else {
        
        res.writeHead(200, {
            'Content-Type': 'audio/m4a',
            'Content-Length': stat.size
        });

        readStream.pipe(res);
        
      }
  });
  

};

