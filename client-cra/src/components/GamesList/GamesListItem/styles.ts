import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cell: {
        minWidth: 150,
        padding: 10,
    },
    commandCell: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardIcon: {
        color: 'red',
    },
    active: {
        color: 'green',
    }
});

export default useStyles