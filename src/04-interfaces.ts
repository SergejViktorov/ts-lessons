interface PluginConfig {
	readonly selector: string
	perPage: number
	startIndex?: number
	draggable: boolean
}

const config: PluginConfig = {
	selector: '#plugin-1',
	perPage: 2,
	// startIndex: 0,
	draggable: false,
}

console.log(config)

interface Employeese {
	[key: string]: number
}

const employeese: Employeese = {
	mango: 5,
	poly: 10,
	ajax: 20,
	wiki: 50,
}

const entries = Object.entries(employeese)

let bestEmployeeName = ''
let bestEmployeeProIndex = 0

for (const [name, value] of entries) {
	if (bestEmployeeProIndex <= value) {
		bestEmployeeName = name
	}
}

console.log(bestEmployeeName)

export {}
