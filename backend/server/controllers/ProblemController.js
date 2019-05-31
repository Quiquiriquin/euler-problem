import ControllerUtils from '../utils/ControllerUtils'
import XMath from 'xmath'
import { manager } from '../service-manager/RequestManager';
import { variablesManager } from '../service-manager/VariablesManager';

let getAnswer =(limit, sum, numbers) => {

	for (let parity = 0; parity < 2; parity++) {
        let p = buildPalindrome(1, parity);
        for (var i = 2; p < limit; i++) {
            if (isPalindrome(p, 10)) {
				sum+= p;
				numbers.push(p)
            }
            p = buildPalindrome(i, parity);
        }
	}
	return {
		sum,
		numbers
	}
}

let buildPalindrome = (x, oddPalindrome) => {
    var res = x;
    x>>= oddPalindrome;
    while (x > 0) {
        res = (res << 1) | (x & 1);
        x>>= 1;
    }
    return res;
}


let isPalindrome = (x, base) => {

    var s = x.toString(base);
    var a = s.length - 1;
    var b = 0;

    while (b < a) {

        if (s[a] !== s[b]) {
            return false;
        }
        b++;
        a--;
    }
    return true;
}


class ProblemController {

	static async solveProblem(req, res) {
		const { limit } = req.body;
		let ans = 0, arr = [];
		try {
            let data = await variablesManager.createSolutionVariables(getAnswer(limit, ans, arr));
            data.limit = limit
            await manager.postSolution(data)
			ControllerUtils.successfulOperation(res, {
				data
			})
		} catch(err) {
			ControllerUtils.handleError(res, err)
		}
    }
    
    static async list(req, res) {
        try{
            let data = await manager.listSolutions()
            ControllerUtils.successfulOperation(res,{
                data
            })
        } catch(err) {
            ControllerUtils.handleError(res, err)
        }
    }

    static async show(req, res){
        const { idSolution } = req.body
        try {
            let data = await manager.getSolution(idSolution)
            ControllerUtils.successfulOperation(res,{
                data
            })
        } catch(err) {
            ControllerUtils.handleError(res, err)
        }
    }
}

export default ProblemController

