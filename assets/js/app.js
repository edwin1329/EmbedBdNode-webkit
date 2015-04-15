var Datastore = require('nedb')
  , path = require('path')
  , db = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'something.db'), autoload:true })

	db.loadDatabase();

function insert_bd(){
	var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

    db.insert(doc, function(err, newDoc){
    	console.log(newDoc);
    });	
}

function load_bd(){
	db.find({}, function (err, docs) {
		console.log(docs);
	});
}