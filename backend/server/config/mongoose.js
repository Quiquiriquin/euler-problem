var mongoose =  require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pruebadb', {useNewUrlParser : true});
let db = mongoose.connection;
db.on('error', () => {
	console.log('connection error');
})
db.once('open', () => {
	console.log("We're connected")
})


export default db