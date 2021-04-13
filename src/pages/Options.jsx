
import React from 'react';

import Navbar from '../components/NavBar';
import Options from '../components/Options';
import Footer from '../components/Footer';
import Selected from '../components/SelectedOption';

const OptionsInformation = () => {
    return (
    <>
        <Navbar />
        <Options />
        <Selected />
        <Footer />
    </>)
}

export default OptionsInformation;