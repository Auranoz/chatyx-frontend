import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

export const AuthBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem auto 0;
    width: 30%;

    > div {
        margin-bottom: 1rem;
    }

    > div:last-child {
        margin-bottom: 0;
    }
` as typeof Box;

export const AvatarContainer = styled(Avatar)`
    width: 4rem;
    height: 4rem;
` as typeof Avatar;

export const NewUserBox = styled(Box)`
    display: flex;
    margin-top: 2rem;
    //width: 100%;
    //justify-content: center;
    //padding: 1rem;
    //border: 1px solid dodgerblue;
` as typeof Box;
