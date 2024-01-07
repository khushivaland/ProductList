import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Blog from './Blog';
import axios from 'axios';
import { TabScrollButton } from '@mui/material';

export default function LetestNews() {
    const [singleData, setSingleData] = useState({});
  const [newsList, setNewsList] = useState([]);
  const [displayedNews, setDisplayedNews] = useState(4);

  useEffect(() => {
    // Fetching product by ID
    axios.get('https://dummyjson.com/products/1')
      .then(response => {
        setSingleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product by ID:', error);
      });

    // Fetching all products
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setNewsList(response.data.products);
        // console.log(productsList)
      })
      .catch(error => {
        console.error('Error fetching all products:', error);
      });
  }, []);



  const handleBlogClick = (productId) => {
    // Fetching product details by ID
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setSingleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details by ID:', error);
      });
  };
  const handleNextClick = () => {
    setDisplayedNews((prevCount) => prevCount + 4);
  };

    return (
       
        <Container>
              <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>

                    <Box
                        component="img"
                        sx={{
                            height: 250,
                            width: 450,
                            // maxHeight: { xs: 300, md: 200 },
                            // maxWidth: { xs: 400, md: 300 },
                        }}
                        alt="girl"
                        src={singleData.thumbnail}
                    />
                </Grid>
                <Grid item xs={6}>
                    <h1 style={{ width: 440, fontSize: 35, fontFamily: 'initial' }}>
                        {singleData.title}
                        {/* Where To Watch 'John Wick: Chapter 4 */}
                        </h1>
                    <p>
                        {singleData.description}
                        {/* There's been no official announcement regarding John Wick: Chapter 4's streaming release. However, given it's a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz,... */}
                        </p>
                    <div style={{display:'flex'}}>
                    <p style={{color:'red'}}>{singleData.category} </p><span style={{color:'black', marginLeft:10}}> <p> {singleData.price}</p></span>
                    </div>
                </Grid>
            </Grid>
        </Box>




            <h1 style={{marginTop:50}}>Letest News</h1>
            {displayedNews < newsList.length && (
        <Button onClick={handleNextClick} style={{color:'#BD0505',float:'right'}}>See all <TabScrollButton /></Button>
      )}
            
            <Box sx={{ width: '100%' }}>
           
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {newsList.slice(displayedNews - 4, displayedNews).map((row) => (
            <Grid key={row.id} item xs={3} >
              <Blog {...row} onClick={handleBlogClick} />
            </Grid>
          ))}
        </Grid>
              
            </Box>

            {/* ))} */}
        </Container>
    );
}

