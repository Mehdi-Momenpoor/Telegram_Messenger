import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PushPinIcon from '@mui/icons-material/PushPin';

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
    isPin,
    isMute,
    type,


}) {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            <Avatar
                src={avatarSrc}
            />

            <div className={classes.messageInfo}>
                <div>
                    {type === 'pv' && <PersonIcon />}
                    {type === 'group' && <GroupIcon />}
                    {type === 'channel' && <VolumeMuteIcon />}

                    {name}
                </div>
                <div>
                    {type === 'group' ? `${lastSenderName}: ${lastMessage}` : lastMessage}
                    {/* // {lastSenderName} : {lastMessage} */}
                    {/* {lastMessage} */}
                </div>
            </div>

            <div>
                <div>{date}</div>
                <div>
                    <Badge badgeContent={countUnreadMessage} color={isMute ? "secondary" : 'primary'} />
                    {isPin && <PushPinIcon />}
                </div>
            </div>

        </div>
    )
}
