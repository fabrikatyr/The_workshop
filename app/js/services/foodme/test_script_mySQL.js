var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-50-19-213-178.compute-1.amazonaws.com',
  user     : 'testdb101',
  password : 'testdb101',
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

