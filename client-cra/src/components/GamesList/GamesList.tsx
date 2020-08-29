import React from 'react';
import { useQuery } from '@apollo/client';
import { LIST_OF_GAMES, UPDATES_SUBSCRIPTION } from 'queries/queries';
import Typography from '@material-ui/core/Typography';
import GamesListRows from './GameListRows/GameListRows';
import useStyles from './styles';

const GamesList: React.FC = React.memo(() => {
    const classes = useStyles()
    const { subscribeToMore, loading, error, data } = useQuery(LIST_OF_GAMES);

    const getMore = React.useCallback(() => subscribeToMore({
        document: UPDATES_SUBSCRIPTION,
        updateQuery: (prev, {subscriptionData}) => {
            // console.log(subscriptionData)
            if (!subscriptionData.data) return prev;
            return subscriptionData.data
        }
    }), [subscribeToMore])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th className={classes.header}><Typography>Статус</Typography></th>
                    <th className={classes.header}><Typography>Команда 1</Typography></th>
                    <th className={classes.header}><Typography>Счет</Typography></th>
                    <th className={classes.header}><Typography>Команда 2</Typography></th>
                </tr>
            </thead>
            <GamesListRows data={data} getMore={getMore} />
        </table>
    );
})

export default GamesList;
