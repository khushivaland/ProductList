import * as React from 'react';
import NavBar from "./Components/NavBar";
import Craft from "./Components/Craft";
// import MovieDes from "./Components/MovieDes";
import LetestNews from './Components/LetestNews';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      
      <NavBar />
      <br></br>
      <Craft />
      <br></br>
      {/* <MovieDes /> */}
      <br></br>
      <LetestNews />
      <br></br>
      <Subscribe />
      <br></br>
      <Footer />
    </div>
  );
}
export default App;
