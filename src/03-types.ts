type Id = number | string

const userId: Id = 5
const postId: Id = 'fdgdfgrg'

type Coords = [number, number]

const coords: Coords = [58.6788, 30.5475]

type ReqStatus = 'request' | 'succes' | 'error'

const requestStatus: ReqStatus = 'succes'

console.log(userId, postId, coords, requestStatus)

export {}
