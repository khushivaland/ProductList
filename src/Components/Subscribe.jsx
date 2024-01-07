import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Subscribe() {

    return (
      
            <Container style={{backgroundColor:'#e5e5e5', width:1330,borderRadius:10,paddingTop:10,paddingBottom:10}}>
                <Box sx={{ width: '100%' }}>
                    <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                       
                                <p>GET FIRST UPDATE</p>
                                <h2>Get the news in front line by <span style={{ color: 'red' }}>subscripbe</span> <i className="fa-solid fa-pen"></i> our latest updates</h2>
                           
                        </Grid>
                        <Grid item xs={6} style={{paddingTop:80,paddingBottom:50}}>
                        <TextField id="outlined-basic" label="Your email" variant="outlined" style={{backgroundColor:'white',width:300}} />
                        <Button variant="contained" style={{backgroundColor:'red',marginTop:10,marginLeft:10}}>Subscribe</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

       
    );
}
export default Subscribe;