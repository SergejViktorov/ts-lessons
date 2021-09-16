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

export {}
