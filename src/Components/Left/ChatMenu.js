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


    const classes = useStyles();
    const inputRef = useRef();


    useEffect(
        () => {
            inputRef.current.focus();
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

                <Card
                    name={'Saleh'}
                    lastMessage={'بشیم بشیم'}
                    avatarSrc='https://i.pravatar.cc/300?img=1'
                />

                <Card
                    name={'Mahsa'}
                    lastMessage={'دقیقا'}
                    avatarSrc='https://i.pravatar.cc/300?img=2'
                />

                <Card
                    name={'Zahra'}
                    lastMessage={'باشه'}
                    avatarSrc='https://i.pravatar.cc/300?img=3'
                />

                <Card
                    name={'سجاد'}
                    lastMessage={'Ok'}
                    avatarSrc='https://i.pravatar.cc/300?img=4'
                />
                <Card
                    name={'Saleh'}
                    lastMessage={'بشیم بشیم'}
                    avatarSrc='https://i.pravatar.cc/300?img=1'
                />

                <Card
                    name={'Mahsa'}
                    lastMessage={'دقیقا'}
                    avatarSrc='https://i.pravatar.cc/300?img=2'
                />

                <Card
                    name={'Zahra'}
                    lastMessage={'باشه'}
                    avatarSrc='https://i.pravatar.cc/300?img=3'
                />

                <Card
                    name={'سجاد'}
                    lastMessage={'Ok'}
                    avatarSrc='https://i.pravatar.cc/300?img=4'
                />
                <Card
                    name={'Saleh'}
                    lastMessage={'بشیم بشیم'}
                    avatarSrc='https://i.pravatar.cc/300?img=1'
                />

                <Card
                    name={'Mahsa'}
                    lastMessage={'دقیقا'}
                    avatarSrc='https://i.pravatar.cc/300?img=2'
                />

                <Card
                    name={'Zahra'}
                    lastMessage={'باشه'}
                    avatarSrc='https://i.pravatar.cc/300?img=3'
                />

                <Card
                    name={'سجاد'}
                    lastMessage={'Ok'}
                    avatarSrc='https://i.pravatar.cc/300?img=4'
                />

            </div>
        </div>
    )
}

