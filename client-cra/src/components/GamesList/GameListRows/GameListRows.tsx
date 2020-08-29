import React, { useEffect } from 'react';
import GamesListItem from '../GamesListItem/GamesListItem';
import { GameInfo } from 'models/GameInfo';

interface GamesListRowsProps {
    getMore(): () => void
    data: {
        games: GameInfo[]
    }
}

const GamesListRows: React.FC<GamesListRowsProps> = React.memo(({getMore, data}) => {
    useEffect(() => {
        const unsubscribe = getMore()
        return () => unsubscribe()
    }, [getMore])

    return (
        <tbody>
            {data.games.map((game) => <GamesListItem key={game.id} data={game}/>)}
        </tbody>
    );
})

export default GamesListRows;
