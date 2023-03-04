import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';

import { useActions, useAppSelector } from 'shared/hooks';
import { chatCreateActions } from './model';
import { useCreateChatMutation } from './api';
import { ChatCreateProps } from './consts';

const ChatCreate: React.FC<ChatCreateProps> = ({ onRefreshChats }) => {
    const [isOpenDialog, setOpenDialog] = React.useState(false);
    const { name, description } = useAppSelector(state => state.chatCreateSlice);
    const { handleInputName, handleInputDescription, reset } = useActions(chatCreateActions);
    const [fetchCreateChat, { isSuccess }] = useCreateChatMutation();

    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

    React.useEffect(() => {
        if (isSuccess) {
            reset();
            handleDialogClose();
            onRefreshChats();
        }
    }, [isSuccess]);

    return (
        <>
            <Tooltip title="Create new chat">
                <Fab aria-label="add" color="primary" size="large" onClick={handleDialogOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog open={isOpenDialog} onClose={handleDialogClose}>
                <DialogTitle>Create a chat</DialogTitle>
                <DialogContentWithIndents>
                    <TextField
                        type="text"
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={event => handleInputName(event.target.value)}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        label="Description"
                        value={description}
                        onChange={event => handleInputDescription(event.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => fetchCreateChat({ name, description })}
                    >
                        Create
                    </Button>
                </DialogContentWithIndents>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ChatCreate;

// const CreateChatButton = styled(IconButton)`
//     border: 1px solid green;
// ` as typeof IconButton;

const DialogContentWithIndents = styled(DialogContent)`
    > div {
        margin-bottom: 0.5rem;
    }

    > div:last-child {
        margin-bottom: 0;
    }
` as typeof DialogContent;
