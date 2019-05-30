class VariablesManager {

	createSolutionVariables (data) {
		let { numbers, sum } = data;
		return {
			numbers,
			sum
		}
	}

}

export const variablesManager = new VariablesManager()