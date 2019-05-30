import db from "../config/mongoose";
import { Solutions } from "../models/models";

class RequestManager {
	
	async postSolution (body) {
		console.log(body)
		return await Solutions.create(body)
	}

	async listSolutions (){
		return await Solutions.find()
	}

	async getSolution (id){
		return await Solutions.findById(id)
	}

}

export const manager = new RequestManager()