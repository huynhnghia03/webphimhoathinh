import { Box, CircularProgress, Stack } from '@mui/material';
import React from 'react';

export interface ILoadingPageProps {
    isLoading: boolean;
}

export function LoadingPage(props: ILoadingPageProps) {
    return (
        <Stack
            sx={{
                // position: 'absolute',
                // top: 0,
                // right: 0,
                background: '#00000020',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                zIndex: 1000,
                display: props.isLoading ? 'flex' : 'none',
                alignItems: 'center', // Center horizontally
                justifyContent: 'center', // Center vertically
            }}
        >
            <Box
                width={50}
                height={50}
                sx={{
                    WebkitAnimation: 'rotating 1.5s linear infinite',
                    MozAnimation: 'rotating 1.5s linear infinite',
                    animation: 'rotating 1.5s linear infinite',
                }}
            >
                <CircularProgress sx={{ color: 'white' }} />
            </Box>
        </Stack>
    );
}
