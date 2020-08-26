interface GameInfo {
    id: string | number
    teamA: string
    teamB: string
    goals: [number, number]
    teamACards: number
    teamBCards: number
    gameStatus: string
    minute: number
}

const createData = (): GameInfo[] => {
    const data = []

    for (let i=0; i<= 10; i++) {
        data.push({
            id: i,
            teamA: 'teamA-'+i,
            teamB: 'teamB-'+i,
            goals: [0, 0],
            teamACards: 0,
            teamBCards: 0,
            gameStatus: 0,
            minute: 0,
        })
    }

    return data;
}

const statistics = createData()

export default statistics;