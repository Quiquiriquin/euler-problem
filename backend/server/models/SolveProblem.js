import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const solveProblemSchema = new Schema({
	idSolution: ObjectId,
	sum: Number,
	numbers: [Number]
})

const Solutions = mongoose.model('Solutions', solveProblemSchema)

export default Solutions
