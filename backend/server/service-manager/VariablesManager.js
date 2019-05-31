class VariablesManager {

	createSolutionVariables (data) {
		let { numbers, sum, limit } = data;
		return {
			numbers,
			sum,
			limit
		}
	}

}

export const variablesManager = new VariablesManager()