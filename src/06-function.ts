type AddFn = (a: number, b: number) => number

interface IAddFn {
	(a: number, b: number): number
}

const addExpression: AddFn = function (x, y) {
	return x + y
}

const res = addExpression(2, 3)

const addArrow: IAddFn = (x, y) => {
	return x + y
}

console.log('addExpression', addExpression(1, 5))
console.log(res)
console.log('addArrow', addArrow(4, 8))

type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number

const fn: Fn = (a, b, c, ...restParams) => {
	return 5
}

fn(1, 2, 3, 4, 5, 6, 7, 8, 9)

type LogFn = (m: string) => void

const log: LogFn = (message) => {}
log('hello')

export {}
