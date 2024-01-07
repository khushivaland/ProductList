import * as React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Container from '@mui/material/Container';

function Craft() {

  return (
  <div className='contai ' style={{textAlign:'center'}}>
    <Container maxWidth="xl" style={{backgroundColor:'#e5e5e5', width:1330,borderRadius:10,paddingTop:10,paddingBottom:10}}>
    <p>WELCOME TO BULETIN</p>
    <h1 style={{width:700,marginLeft:350}}>Craft narratives <i className="fa-solid fa-pen"></i> that ignite inspiration <LightbulbIcon /> knowledge <i className="fa-solid fa-book"></i> , and entertainment <img src="../images/action.png" /></h1>
    </Container>
  </div>
  );
}
export default Craft;