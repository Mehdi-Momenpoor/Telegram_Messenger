import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, TextField } from '@mui/material';
import Card from './Card/Card';
import Drawer from './Drawer/Drawer';

const useStyles = makeStyles(theme => ({
    root: {
        width: '40%',
        height: '100%',
        backgroundColor: '#ffffff',
    },

    toolbar: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: '7%',
        position: 'sticky',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1)
    },

    searchBox: {
        // outline: `1px solid aqua`,
    },

    menuIcon: {
        margin: `0 ${theme.spacing(1)}`
    },

    cartsArea: {
        backgroundColor: 'white',
        height: '93%',
        overflow: 'auto',
    },



}))

export default function ChatMenu() {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [first, setfirst] = useState([]);

    const classes = useStyles();
    const inputRef = useRef();


    useEffect(
        () => {
            inputRef.current.focus();
            fetch('https://mocki.io/v1/6ca765ad-f33d-4a00-b755-1bf9463405f8')
                .then(res => res.json())
                .then(res => setfirst(res))
        }, []
    )


    return (
        <div className={classes.root}>

            <Drawer
                openDrawer={openDrawer}
                onOpenDrawer={(toggleOpen) => setOpenDrawer(toggleOpen)}
            />

            <div className={classes.toolbar}>
                <IconButton onClick={() => setOpenDrawer(true)} className={classes.menuIcon}>
                    <MenuIcon />
                </IconButton>

                <TextField
                    className={classes.searchBox}
                    size='small'
                    variant='outlined'
                    fullWidth
                    inputRef={inputRef}
                />
            </div>

            <div className={classes.cartsArea}>


                {first.map(item => {
                    return <Card
                        key={item.uuid}
                        name={item.name}
                        lastMessage={item.lastMessege}
                        lastSenderName={item.lastSender}
                        avatarSrc={item.avatarUrl}
                        date={item.date}
                        countUnreadMessage={item.notification}
                        isMute={item.mute}
                        type={item.type}
                        isPin={item.pin}
                        // seen={item.seen}
                    />
                })}



            </div>
        </div>
    )
}

