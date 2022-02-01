import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    appRoot: {
        width: '100vw',
        height: '100vh',
        display: 'flex'
    },

}))


export default function Layout({ children }) {

    const classes = useStyles();

    return (
        <div className={classes.appRoot}>
            {children}
        </div>
    );
}
