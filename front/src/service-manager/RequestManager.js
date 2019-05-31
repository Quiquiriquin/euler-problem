import Axios from "axios";
import urlManager from "../utils/urlManager";

class RequestManager {

	postSolve = async(data) => {
		return await Axios.post(urlManager.solve, data)
	}

	getSolves = async(data) => {
		return await Axios.get(urlManager.solve)
	}

}

export const manager = new RequestManager()