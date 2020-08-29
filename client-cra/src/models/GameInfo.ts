export interface GameInfo {
    id: string | number
    teamA: string
    teamB: string
    goals: [number, number]
    teamACards: number
    teamBCards: number
    gameStatus: number
    minute: number
}