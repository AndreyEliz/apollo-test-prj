interface GameInfo {
    id: number
    teamA: string
    teamB: string
    goals: number[]
    teamACards: number
    teamBCards: number
    gameStatus: number
    minute: number
}

interface IStore {
    data: GameInfo[]
    updateData(): void
}

const createBaseGame = (id) => ({
    id: id,
    teamA: 'teamA-' + id,
    teamB: 'teamB-' + id,
    goals: [0, 0],
    teamACards: 0,
    teamBCards: 0,
    gameStatus: 0,
    minute: 0,
}) 

const createData = (): GameInfo[] => {
    const data = []

    for (let i=0; i<= 10; i++) {
        data.push(createBaseGame(i))
    }

    return data;
}

const randomKey = (obj:any) => {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};

const actionsHashMap = {
    'goals' : (randomItem: GameInfo) =>randomItem.gameStatus ?
        randomItem.goals[randomItem.goals.length * Math.random() | 0]++
        :
        randomItem.gameStatus++,
    'teamACards': (randomItem: GameInfo) => ((randomItem.gameStatus == 1) || (randomItem.gameStatus == 3)) ?
        (2 * Math.random() | 0) && randomItem.teamACards++ 
        :
        randomItem.gameStatus++,
    'teamBCards': (randomItem: GameInfo) => ((randomItem.gameStatus == 1) || (randomItem.gameStatus == 3)) ?
        (2 * Math.random() | 0) && randomItem.teamBCards++
        :
        randomItem.gameStatus++,
    'minute': (randomItem: GameInfo) => (randomItem.minute < 45) ? //magic numbers shoul be replaced with constants 
        randomItem.gameStatus === 2 ? randomItem.minute += 30 : randomItem.minute += 15
        :
        (randomItem.minute = 0 || randomItem.gameStatus++),
}

const updateRandomly = (data: GameInfo[]) => {
    const length = data.length
    const randomIndex = length * Math.random() | 0
    const randomItem = data[randomIndex]
    const key = randomKey(randomItem)
    actionsHashMap[key] && actionsHashMap[key](randomItem)
    if (randomItem.gameStatus > 4) {
        const nextId = Math.max(...data.map((game) => game.id))
        const newGame = createBaseGame(nextId)
        data.splice(randomIndex, 1)
        return [newGame, ...data]
    }
    return [...data]
}

class Store implements IStore {
    private games: GameInfo[]

    constructor () {
        this.games = createData()
    }

    public get data () {
        return this.games
    }

    public updateData() {
        this.games = updateRandomly(this.games)
        console.log('data updated', this.games.length)
        return this.games
    }
}

const store = new Store()

export default store;