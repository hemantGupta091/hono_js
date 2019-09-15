console.log('app start here!!');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
var commond = process.argv[2];

//console.log('commond', commond);
//console.log('process', process.argv);
//console.log('yargs', argv);



if(commond === 'add')
{
	notes.addNote(argv.title, argv.body);
}else if(commond === 'list')
{
	notes.getAll();
}
else if(commond === 'read')
{
	notes.getNote(argv.title);
}
else if(commond === 'remove')
{
	note.removeNote(argv.title);
}
else{
	console.log('commond recognized');
}


//var addNote = notes.addNote();

//var add = notes.add(5,6);

//console.log(add);

//var user = os.userInfo();
//fs.appendFile('generateText.txt', 'Hello'+user.username, function(err){});
//fs.appendFile('generateText.txt', 'Hello'+ `${user.username} and ${notes.age}`, function(err){});


