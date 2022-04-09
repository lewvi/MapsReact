import React from 'react';
import './App.css'
import Container from '@material-ui/core/Container';


import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Maps from './component/Maps';
import Search from './component/Search';


export default function App() {

  return (
    <React.Fragment>
      <Navbar />
      <div >
      <Container maxWidth="xl">
        <Maps />
      </Container>
      </div>
      <Footer/>
    </React.Fragment>
  );
}