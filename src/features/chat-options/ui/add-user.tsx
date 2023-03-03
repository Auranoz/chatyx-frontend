/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { Decamelized } from 'humps';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppSelector } from 'shared/hooks';
import { UserInfo } from 'entities/user';
import { useAddChatUserMutation } from '../api';

interface AddUserProps {
    open: boolean;
    onClose: () => unknown;
    usersList?: Decamelized<UserInfo>[];
}

// TODO: 1. Add a filter for users-list (cannot include itself and members already existing in chat)
const AddUser: React.FC<AddUserProps> = ({ open, onClose, usersList }) => {
    const [value, setValue] = useState<{ label: string; id: string } | null>(null);
    const [inputValue, setInputValue] = useState('');
    const token = useAppSelector(state => state.userAuthSlice);
    const { id: chatId } = useAppSelector(state => state.selectedChatSlice);
    const [fetchAddUser, { isLoading, isSuccess, requestId }] = useAddChatUserMutation();

    useEffect(() => {
        if (isSuccess && !isLoading) {
            handleClose();
        }
    }, [isSuccess, isLoading, requestId]);

    const dataList = usersList?.map(item => ({ label: item.username, id: item.id })) ?? [];

    const handleAddUser = () => {
        fetchAddUser({ token, data: { chatId, userId: value?.id ?? '' } });
    };

    const handleClose = () => {
        setValue(null);
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                Add new user
                <CloseIconButton onClick={handleClose}>
                    <CloseIcon />
                </CloseIconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>Enter username here</DialogContentText>
                <StyledAutoComplete
                    value={value}
                    options={dataList}
                    noOptionsText="Cannot find users"
                    getOptionLabel={option => option.label}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue: string) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={params => <TextField {...params} label="Username" />}
                />
            </DialogContent>
            <StyledDialogActions>
                <Button
                    disabled={!value?.id || isLoading}
                    variant="contained"
                    onClick={handleAddUser}
                >
                    {isLoading ? <StyledSpinner size={30} /> : 'Confirm'}
                </Button>
            </StyledDialogActions>
        </Dialog>
    );
};

export default AddUser;

const CloseIconButton = styled(IconButton)`
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: rgb(158, 158, 158);
` as typeof IconButton;

const StyledAutoComplete = styled(Autocomplete)`
    margin-top: 0.5rem;
` as typeof Autocomplete;

const StyledDialogActions = styled(DialogActions)`
    padding: 0.5rem 1.5rem 1rem 1.5rem;
` as typeof DialogActions;

const StyledSpinner = styled(CircularProgress)`
    color: rgb(158, 158, 158);
` as typeof CircularProgress;
