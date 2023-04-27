import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './Cards.css'

const Item = styled(Paper)(({ theme, className }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    className
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

function Cards(props) {

    let { title } = props;
    const navigate = useNavigate();

    const [ele, setEle] = useState(1)

    return (
        <React.Fragment>
            {[lightTheme].map((theme, index) => (
                <Grid item xs={4} key={index}>
                    <ThemeProvider theme={theme}>
                        <Box
                            sx={{
                                p: 3,
                                display: 'grid',
                                gridTemplateColumns: { md: '3fr 1fr' },
                                gap: 0,
                            }}
                        >

                            <Item
                                className='sub-cards'
                                key={ele}
                                elevation={ele}
                                onMouseEnter={() => setEle(24)}
                                onMouseLeave={() => setEle(1)}
                                onClick={() => navigate(`/hooks/${title}`)}
                            >
                                {title}
                            </Item>

                        </Box>
                    </ThemeProvider>
                </Grid>
            ))}
        </React.Fragment>
    );
}

export default Cards;
