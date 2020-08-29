import React from 'react';
import { GameInfo } from 'models/GameInfo';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';

interface GamesListItemProps {
    data: GameInfo
}

enum Status {
    'Не начался',
    '1-й тайм',
    'Перерыв',
    '2-й тайм',
    'Закончен'
}


const GamesListItem: React.FC<GamesListItemProps> = ({data}) => {
    const classes = useStyles()
    const createCards = React.useCallback((count: number) => {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(<CropPortraitIcon fontSize="small" className={classes.cardIcon} key={i}/>)
        }
        return cards
    }, [])
    const aCards = createCards(data.teamACards)
    const bCards = createCards(data.teamBCards)

    return (
    <tr className={((data.gameStatus === 1) || (data.gameStatus === 3)) ? classes.active : undefined}>
        <td className={classes.cell}>
            <Typography>{Status[data.gameStatus]}</Typography>
        </td>
        <td className={classes.cell}>
            <div className={classes.commandCell}>
                <Typography component="span">{data.teamA}</Typography>
                {aCards}
            </div>
            
        </td>
        <td className={classes.cell}>{`${data.goals[0]} - ${data.goals[1]}`}</td>
        <td className={classes.cell}>
            <div className={classes.commandCell}>
                <Typography component="span">{data.teamB}</Typography>
                {bCards}
            </div>
        </td>
    </tr>
)};

export default GamesListItem;
