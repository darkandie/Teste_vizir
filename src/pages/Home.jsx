
import React from 'react';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Options from '../components/Options';
import Footer from '../components/Footer'
import Selected from '../components/SelectedOption'


const Home = () => {
    return (
    <>
        <NavBar />
        <Header />
        <Options />
        <Selected />
        <Footer/>
    </>
    )
}

export default Home;

