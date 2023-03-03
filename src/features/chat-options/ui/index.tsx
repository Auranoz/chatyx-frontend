import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppSelector } from 'shared/hooks';
import AddUser from './add-user';
import { useLazyGetUsersListQuery } from '../api';

// TODO: Correct layout for menu-item
// TODO: Only chat creator can invite people to chat
const ChatOptions: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpenAddUser, setOpenAddUser] = useState(false);
    const isOpen = Boolean(anchorEl);
    const token = useAppSelector(state => state.userAuthSlice);
    const [fetchGetUsers, { isSuccess, data, isFetching, requestId }] = useLazyGetUsersListQuery();

    useEffect(() => {
        if (isSuccess && !isFetching) {
            setOpenAddUser(true);
            handleCloseMenu();
        }
    }, [isSuccess, isFetching, requestId]);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenAddUser = () => {
        fetchGetUsers({ token, data: undefined });
    };

    const handleCloseAddUser = () => {
        setOpenAddUser(false);
    };

    return (
        <>
            <IconButton onClick={handleOpenMenu} disabled={isFetching}>
                {isFetching ? <CircularProgress size={20} /> : <MoreVertIcon />}
            </IconButton>
            <Menu
                open={isOpen}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                anchorEl={anchorEl}
            >
                <MenuItem onClick={handleOpenAddUser}>
                    <AddCircleOutlineRoundedIcon />
                    Add user
                </MenuItem>
            </Menu>
            {data?.list.length && (
                <AddUser open={isOpenAddUser} onClose={handleCloseAddUser} usersList={data?.list} />
            )}
        </>
    );
};

export default ChatOptions;
