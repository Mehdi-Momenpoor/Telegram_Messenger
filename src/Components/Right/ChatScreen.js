import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({

    root: {
        width: '60%',
        backgroundColor: theme.palette.primary.main,
        height: '100%',

    },


}))

export default function ChatScreen() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            Right
        </div>
    )
}
