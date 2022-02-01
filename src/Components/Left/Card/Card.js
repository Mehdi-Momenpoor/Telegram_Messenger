import React from 'react';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';


const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        padding: '7px 0',
        backgroundColor: theme.palette.secondary.main,
        margin: '5px 0'
    },

    messageInfo: {
        flex: 1
    },


}))


export default function Card({
    name,
    lastSenderName,
    lastMessage,
    avatarSrc,
    date,
    countUnreadMessage,
    isPin
}) {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            <Avatar
                src={avatarSrc}
            />

            <div className={classes.messageInfo}>
                <div>
                    <PersonIcon />
                    {name}
                </div>
                <div>
                    {/* {lastSenderName} : {lastMessage} */}
                    {lastMessage}
                </div>
            </div>

            <div>
                <div>2021/02/11</div>
                <div>
                    <Badge badgeContent={Math.floor((Math.random() * 100) + 1)} color="primary" />
                </div>
            </div>

        </div>
    )
}
