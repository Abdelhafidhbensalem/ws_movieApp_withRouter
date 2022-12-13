import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as LinkR, useNavigate}  from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Add({addMovie}) {
    const [title, setTitle] = React.useState("")
    const [rating, setRating] = React.useState(0)
    const [imgUrl, setImgUrl] = React.useState("")
    const [descreption, setDescreption] = React.useState("")
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        if (!(title && rating && imgUrl && descreption)){
            alert('Missed field is required')
            return 
        }
       
        addMovie({title,rating,posterUrl:imgUrl,description:descreption})
        navigate('/')
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LocalMoviesIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add movie
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    onChange={e=>setTitle(e.target.value)}
                                    autoComplete="given-name"
                                    name="Title"
                                    required
                                    fullWidth
                                    id="Title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    onChange={e=>setRating(+e.target.value)}
                                    required
                                    fullWidth
                                    id="rating"
                                    label="rating"
                                    name="rating"
                                    type='number'
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={e=>setImgUrl(e.target.value)}
                                    required
                                    fullWidth
                                    name="imgUrl"
                                    label="imgUrl"
                                    type="url"
                                    id="imgUrl"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={e=>setDescreption(e.target.value)}
                                    required
                                    fullWidth
                                    id="Description"
                                    label="Description"
                                    name="Description"
                                    multiline
                                    maxRows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LinkR to="/">
                                <Button
                                    type="cancel"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Back
                                </Button>
                                </LinkR>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}