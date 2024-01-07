// ProductCard.js
import React from 'react';
import { Grid, Box } from '@mui/material';

const ProductCard = ({ id, title, thumbnail, description, category, price, onClick }) => {
    return (
        <Grid item xs={3} key={id} >
            {/* <Link> */}
            <Box
                component="img"
                sx={{
                    height: 200,
                    width: 250,
                }}
                alt="girl"
                src={thumbnail}
                onClick={() => onClick(id)}
            />
            <h2 style={{ fontFamily: 'initial' }}>
                {title}
            </h2>
            <p style={{ width: 200 }}> {description} </p>
            <div style={{ display: 'flex' }}>
                <p style={{ color: 'red' }}>{category} </p><span style={{ color: 'black', marginLeft: 10 }}> <p>
                    {price}
                </p></span>
            </div>
        </Grid>

    );
};

export default ProductCard;
