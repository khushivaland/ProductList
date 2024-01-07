import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "../App.css";


function Footer() {

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                // letterSpacing: '.3rem',
                                color: 'red',
                                textDecoration: 'none',

                            }}
                        >
                            Buletin
                        </Typography>
                        <p>Craft narratives that ignite inspiration, knowledge, and entertainment.</p>
                        <ul style={{ display: 'flex', listStyleType: 'none' }}>
                            <li className='lists'>
                                <i className="fa-brands fa-facebook icons" ></i>
                            </li>
                            <li className='lists' >
                                <i className="fa-brands fa-linkedin icons" ></i>
                            </li>
                            <li className='lists' >
                                <i className="fa-brands fa-twitter icons"></i>
                            </li>
                            <li className='lists'>
                            <i className="fa-brands fa-square-instagram icons"></i>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>

                        <ul style={{ listStyleType: 'none',marginBottom:50 }}>

                            <li>
                                <h3>Business</h3>
                            </li>
                            <li className='list'>Startup</li>
                            <li className='list'>Employee</li>
                            <li className='list'>Success</li>
                            <li className='list'>Videos</li>
                            <li className='list'>Markets</li>
                        </ul>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>
                                <h3>Entertainment</h3>
                            </li>
                            <li className='list'>Movies</li>
                            <li className='list'>Artist</li>
                            <li className='list'>Television</li>
                            <li className='list'>Influencer</li>
                            <li className='list'>Virel</li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul style={{ listStyleType: 'none',marginBottom:50 }}>

                            <li>
                                <h3>Technology</h3>
                            </li>
                            <li className='list'>Innovate</li>
                            <li className='list'>Gadget</li>
                            <li className='list'>Innovative Cities</li>
                            <li className='list'>Upstarts</li>
                            <li className='list'>Future Tech</li>
                        </ul>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>
                                <h3>Features</h3>
                            </li>
                            <li className='list'>As Equals</li>
                            <li className='list'>Call to Earth</li>
                            <li className='list'>Freedom Project</li>
                            <li className='list'>Inside Asia</li>
                            <li className='list'>2 Degress</li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul style={{ listStyleType: 'none',marginBottom:50 }}>

                            <li>
                                <h3>Travel</h3>
                            </li>
                            <li className='list'>Destinations</li>
                            <li className='list'>Food & Drink</li>
                            <li className='list'>Stay</li>
                            <li className='list'>News</li>
                            <li className='list'>Videos</li>
                        </ul>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>
                                <h3>Weather</h3>
                            </li>
                            <li className='list'>Climate</li>
                            <li className='list'>Strom Tracker</li>
                            <li className='list'>Wildfire Tracker</li>
                            <li className='list'>Earthquake</li>
                            <li className='list'>Video</li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul style={{ listStyleType: 'none',marginBottom:50 }}>

                            <li>
                                <h3>S ports</h3>
                            </li>
                            <li className='list'>Football</li>
                            <li className='list'>Tennis</li>
                            <li className='list'>Golf</li>
                            <li className='list'>Motosports</li>
                            <li className='list'>Esports</li>
                        </ul>
                        <ul style={{ listStyleType: 'none' }}>

                            <li>
                                <h3>More</h3>
                            </li>
                            <li className='list'>Design</li>
                            <li className='list'>Mentorship</li>
                            <li className='list'>Investment</li>
                            <li className='list'>Work for Buletin</li>
                            <li className='list'>Support Us</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                      <p>Copyright @ 2023 Buletin.</p>
                    </Grid>
                    <Grid item xs={6}>
                    <ul style={{ display: 'flex', listStyleType: 'none', paddingLeft:500 }}>
                            <li style={{ borderRadius: 30, padding: 10, backgroundColor: 'beige', marginRight: 10 }}>
                                <i className="fa-solid fa-arrow-up" style={{ borderRadius: 17, backgroundColor: 'red', padding: 8 }}></i>
                            </li>
                        </ul>
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>
    );
}
export default Footer;